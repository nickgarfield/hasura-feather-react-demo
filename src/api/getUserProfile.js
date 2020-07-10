import getClient from "./getClient.js";
import gql from "graphql-tag";

export function getUserProfile(id) {
  const query = gql`
    query GetUserProfile {
      users {
        id
        name
        created_at
      }
    }
  `;

  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.query({ query }))
      .then(result =>
        resolve(result.data.users.length > 0 ? result.data.users[0] : null)
      )
      .catch(error => reject(error));
  });
}
