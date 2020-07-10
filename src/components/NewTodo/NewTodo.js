import React, { useState } from "react";
import { createTodo } from "api";
import "./NewTodo.css";

function NewTodo(props) {
  const [title, setTitle] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    createTodo(title).catch(error => console.log(error));
  };

  const onChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo-input"
        value={title}
        onChange={onChange}
        type="text"
        placeholder="Today I will..."
      />
    </form>
  );
}

export default NewTodo;
