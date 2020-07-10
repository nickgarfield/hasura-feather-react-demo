import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { feather } from "feather";

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "https://hasura-test-pliao.herokuapp.com/v1/graphql",
  fetchPolicy: "network-only"
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

export function getClient() {
  return new Promise(function(resolve, reject) {
    feather
      .currentUser()
      .then(user =>
        resolve(
          new ApolloClient({
            cache,
            link: user ? authLink(user).concat(httpLink) : httpLink
          })
        )
      )
      .catch(error => reject(error));
  });
}
