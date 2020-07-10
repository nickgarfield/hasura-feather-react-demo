import React, { useEffect, useState } from "react";
import Todo from "components/Todo";
import NewTodo from "components/NewTodo";
import { getTodos } from "api";

function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    getTodos()
      .then(resp => {
        if (mounted) setTodos(resp.data.todos);
      })
      .catch(error => setError(error));
    return () => (mounted = false);
  }, [props.currentUser, setTodos]);

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <NewTodo />
    </div>
  );
}

export default Todos;
