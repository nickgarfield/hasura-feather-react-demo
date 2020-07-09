import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "https://hasura-test-pliao.herokuapp.com/v1/graphql"
});

function authLink(user) {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${user.tokens.idToken}`
      }
    };
  });
}

export function client(user) {
  return new ApolloClient({
    cache,
    link: authLink(user).concat(httpLink)
  });
}
