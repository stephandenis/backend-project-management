import { gql } from 'apollo-server-express';

const advanceTypes = gql`
  type Advance {
    _id: ID!
    date: Date!
    description: String!
    observations: [String]
    project: Project!
    createdBy: User!
  }

  type Query {
    Advances: [Advance]
  }

  type Mutation {
    createAdvance(
      date: Date!
      description: String!
      project: String!
      createdBy: String!
    ): Advance
  }
`;

export { advanceTypes };
