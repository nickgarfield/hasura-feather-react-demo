import React, { useState } from "react";
import { updateTodo } from "api";

function Todo(props) {
  const [todo, setTodo] = useState(props.todo);

  const toggleTodo = e => {
    updateTodo({ ...todo, is_completed: !todo.is_completed })
      .then(updateTodo => setTodo(updateTodo))
      .catch(error => console.log(error));
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="checkbox"
        name={todo.id}
        checked={todo.is_completed}
        onChange={toggleTodo}
        style={{ margin: "auto 10px auto 0px" }}
      />
      <p>{todo.title}</p>
    </div>
  );
}

export default Todo;
