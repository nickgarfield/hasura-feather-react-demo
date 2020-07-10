import { getClient, MUTATIONS } from "./apollo";

export function createUserProfile(user) {
  return new Promise(function(resolve, reject) {
    getClient()
      .then(client =>
        client.mutate({
          mutation: MUTATIONS.CREATE_USER
        })
      )
      .then(result => resolve(result.data.insert_users_one.returning[0]))
      .catch(error => reject(error));
  });
}
