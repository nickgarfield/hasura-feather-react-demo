import React, { useEffect, useState } from "react";
import Todo from "components/Todo";
import NewTodo from "components/NewTodo";
import { getTodos } from "api";

export default function Todos(props) {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    let mounted = true;

    getTodos()
      .then(todos => {
        if (mounted) {
          setTodos(todos);
          setShouldRefresh(false);
        }
      })
      .catch(e => setError(e));

    return () => (mounted = false);
  }, [props.currentUser, shouldRefresh]);

  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <NewTodo refresh={() => setShouldRefresh(true)} />
    </div>
  );
}
