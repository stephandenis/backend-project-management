import { gql } from 'apollo-server-express';

const userTypes = gql`
  type User {
    _id: ID!
    name: String!
    lastName: String!
    identification: String!
    email: String!
    role: Role!
    status: UserStatus
  }
  type Query {
    Users: [User]
    User(_id: String!): User
  }
  type Mutation {
    createUser(
      name: String!
      lastName: String!
      identification: String!
      email: String!
      role: Role!
      status: UserStatus
    ): User
    editUser(
      _id: String!
      name: String!
      lastName: String!
      identification: String!
      email: String!
      status: UserStatus!
    ): User
    deleteUser(_id: String, email: String): User
  }
`;

export { userTypes };
