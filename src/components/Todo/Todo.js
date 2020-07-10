import React, { useState } from "react";
import { updateTodo } from "api";

import "./Todo.css";

export default function Todo(props) {
  const [todo, setTodo] = useState(props.todo);
  const [error, setError] = useState(null);

  const toggleTodo = e => {
    updateTodo(todo)
      .then(updatedTodo => setTodo(updatedTodo))
      .catch(e => setError(e));
  };

  if (error) return <p>{error.message}</p>;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="checkbox"
        className="todo-checkbox"
        name={todo.id}
        checked={todo.is_completed}
        onChange={toggleTodo}
      />
      <p>{todo.title}</p>
    </div>
  );
}
