import { getClient, MUTATIONS } from "./apollo";

export function updateTodo(todo) {
  return new Promise(function(resolve, reject) {
    getClient()
      .then(client =>
        client.mutate({
          mutation: MUTATIONS.UPDATE_TODO,
          variables: {
            id: todo.id,
            title: todo.title,
            is_completed: !todo.is_completed
          }
        })
      )
      .then(result => resolve(result.data.update_todos.returning[0]))
      .catch(error => reject(error));
  });
}
