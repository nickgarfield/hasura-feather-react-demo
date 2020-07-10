import getClient from "./getClient.js";
import gql from "graphql-tag";

export function getTodos(user) {
  const query = gql`
    query GetTodos {
      todos {
        id
        title
        is_completed
      }
    }
  `;

  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.query({ query }))
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}
