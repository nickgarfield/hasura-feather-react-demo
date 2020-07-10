import gql from "graphql-tag";

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String!) {
    insert_todos_one(object: { title: $title }) {
      id
      title
      is_completed
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $title: String!, $is_completed: Boolean!) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: { title: $title, is_completed: $is_completed }
    ) {
      returning {
        id
        title
        is_completed
      }
    }
  }
`;
