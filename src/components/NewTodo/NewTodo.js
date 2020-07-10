import React, { useState } from "react";
// import { getClient, MUTATIONS, QUERIES } from "apollo";
import { createTodo } from "api";
import "./NewTodo.css";

function NewTodo(props) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    createTodo(title)
      .then(newTodo => {
        setTitle("");
        props.refresh();
      })
      .catch(e => setError(e));
  };

  const onChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  if (error) return <p>{error.message}</p>;
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
