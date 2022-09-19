import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date
  enum UserStatus {
    PENDING
    AUTHORIZED
    UNAUTHORIZED
  }
  enum Role {
    DEVELOPER
    LEADER
    ADMIN
  }
  enum ProjectStatus {
    ACTIVE
    INACTIVE
  }
  enum ProjectPhase {
    STARTED
    DEVELOPMENT
    COMPLETED
    NULL
  }
  enum ObjectiveType {
    GENERAL
    SPECIFIC
  }
  type User {
    _id: ID!
    name: String!
    lastName: String!
    identification: String!
    email: String!
    role: Role!
    status: UserStatus
  }
  type Objective {
    _id: ID!
    description: String!
    type: ObjectiveType!
  }
  input createObjective {
    description: String!
    type: ObjectiveType!
  }
  type Project {
    _id: ID!
    name: String!
    budget: Float!
    startDate: Date!
    endDate: Date!
    status: ProjectStatus!
    phase: ProjectPhase!
    leader: User!
    objectives: [Objective]
  }
  type Query {
    Users: [User]
    User(_id: String!): User
    Projects: [Project]
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
      role: Role!
      status: UserStatus
    ): User
    deleteUser(_id: String, email: String): User
    createProject(
      name: String!
      budget: Float!
      startDate: Date!
      endDate: Date!
      status: ProjectStatus!
      phase: ProjectPhase!
      leader: String!
      objectives: [createObjective]
    ): Project
  }
`;

export { typeDefs };
