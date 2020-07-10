import getClient from "./getClient.js";
import gql from "graphql-tag";

export function updateTodo(todo) {
  const mutation = gql`
    mutation UpdateTodo {
      update_todos(where: {id: {_eq: ${todo.id}}}, _set: {is_completed: ${todo.is_completed}, title: "${todo.title}"}) {
        returning {
          id
          title
          is_completed
        }
      }
    }
  `;

  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.mutate({ mutation }))
      .then(result => resolve(result.data.update_todos.returning[0]))
      .catch(error => reject(error));
  });
}
