import getClient from "./getClient.js";
import gql from "graphql-tag";

export function createUserProfile(user) {
  const mutation = gql`
    mutation CreateUser {
      insert_users_one(object: {}) {
        id
        name
      }
    }
  `;

  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.mutate({ mutation }))
      .then(result => resolve(result.data.insert_users_one.returning[0]))
      .catch(error => reject(error));
  });
}
