import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
  query Query {
    users {
      id
      name
      emailId
      password
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation Mutation($name: String, $emailId: String, $password: String) {
    create(name: $name, emailId: $emailId, password: $password) {
      id
      name
      emailId
      password
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation Mutation($id: ID) {
    delete(id: $id)
  }
`;

export const EDIT_USER_MUTATION = gql`
  mutation Mutation(
    $id: ID
    $name: String!
    $emailId: String!
    $password: String!
  ) {
    edit(id: $id, name: $name, emailId: $emailId, password: $password) {
      id
      name
      emailId
      password
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $emailId: String!
    $password: String!
    $name: String!
  ) {
    signup(emailId: $emailId, password: $password, name: $name) {
      id
      name
      emailId
      password
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($emailId: String, $password: String) {
    login(emailId: $emailId, password: $password) {
      emailId
      password
    }
  }
`;
