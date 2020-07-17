import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const httpLink = new HttpLink({
  uri: "https://hasura-test-pliao.herokuapp.com/v1/graphql",
  fetchPolicy: "network-only"
});

const authLink = setContext((_, { headers }) => {
  const idToken = sessionStorage.getItem("feather.currentUser.tokens.idToken");
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${idToken}`
    }
  };
});

export const apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});
