import { gql } from 'apollo-server-express';

const projectTypes = gql`
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
    Projects: [Project]
  }
  type Mutation {
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

export { projectTypes };
