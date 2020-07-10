import gql from "graphql-tag";

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    users {
      id
      name
      created_at
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      is_completed
    }
  }
`;
