import { getClient, QUERIES, MUTATIONS } from "./apollo";

export function createTodo(title) {
  return new Promise(function(resolve, reject) {
    const updateCache = (cache, { data: { insert_todos_one } }) => {
      const { todos } = cache.readQuery({ query: QUERIES.GET_TODOS });
      cache.writeQuery({
        query: QUERIES.GET_TODOS,
        data: { todos: todos.concat([insert_todos_one]) }
      });
    };

    getClient()
      .then(client =>
        client.mutate({
          mutation: MUTATIONS.CREATE_TODO,
          variables: { title },
          update: updateCache
        })
      )
      .then(result => resolve(result.data.insert_todos_one))
      .catch(error => reject(error));
  });
}
