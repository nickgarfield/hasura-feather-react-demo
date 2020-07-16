import React from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import { useQuery, gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      is_completed
    }
  }
`;

function Todos(props) {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      {data.todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <NewTodo />
    </div>
  );
}

export default Todos;
