import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    insert_todos_one(object: { title: $title }) {
      id
      title
      is_completed
    }
  }
`;

function NewTodo(props) {
  const [title, setTitle] = useState("");
  const [createTodo] = useMutation(CREATE_TODO);

  const onSubmit = e => {
    e.preventDefault();
    createTodo({ variables: { title } });
  };

  const onChange = e => {
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
