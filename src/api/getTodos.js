import { client } from "./client.js";
import gql from "graphql-tag";

export function getTodos(user) {
  return new Promise(function(resolve, reject) {
    client(user)
      .query({
        query: gql`
          query GetTodos {
            todos {
              id
              title
              is_public
              is_completed
            }
          }
        `
      })
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}
