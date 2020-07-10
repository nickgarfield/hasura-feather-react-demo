import { getClient, QUERIES } from "./apollo";

export function getTodos() {
  return new Promise(function(resolve, reject) {
    getClient()
      .then(client => client.query({ query: QUERIES.GET_TODOS }))
      .then(resp => resolve(resp.data.todos.sort((a, b) => a.id - b.id)))
      .catch(error => reject(error));
  });
}
