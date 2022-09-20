import { gql } from 'apollo-server-express';

const inscriptionTypes = gql`
  type Inscription {
    _id: ID!
    status: InscriptionStatus!
    entryDate: Date
    exitDate: Date
    project: Project
    developer: User!
  }

  type Query {
    Inscriptions: [Inscription]
  }

  type Mutation {
    createInscription(
      status: InscriptionStatus!
      project: String!
      developer: String!
    ): Inscription

    approveInscription(id: String!): Inscription
  }
`;

export { inscriptionTypes };
