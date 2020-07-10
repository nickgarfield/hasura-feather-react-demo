import { getClient, QUERIES } from "./apollo";

export function getUserProfile(id) {
  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.query({ query: QUERIES.GET_USER_PROFILE }))
      .then(result =>
        resolve(result.data.users.length > 0 ? result.data.users[0] : null)
      )
      .catch(error => reject(error));
  });
}
