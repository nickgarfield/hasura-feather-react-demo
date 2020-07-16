import React from "react";
import { useMutation, gql } from "@apollo/client";

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!, $is_completed: Boolean!) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: { is_completed: $is_completed }
    ) {
      returning {
        id
        is_completed
      }
    }
  }
`;

export default function Todo(props) {
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  const onChange = e => {
    toggleTodo({
      variables: {
        id: props.todo.id,
        is_completed: !props.todo.is_completed
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="checkbox"
        className="todo-checkbox"
        name={props.todo.id}
        checked={props.todo.is_completed}
        onChange={onChange}
      />
      <p>{props.todo.title}</p>
    </div>
  );
}
