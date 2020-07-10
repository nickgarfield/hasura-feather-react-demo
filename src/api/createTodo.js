import getClient from "./getClient.js";
import gql from "graphql-tag";

export function createTodo(title) {
  const mutation = gql`
    mutation CreateTodo {
      insert_todos_one(object: { title: "${title}" }) {
        id
        title
        is_completed
      }
    }
  `;

  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.mutate({ mutation }))
      .then(result => resolve(result.data.insert_todos_one.returning[0]))
      .catch(error => reject(error));
  });
}
