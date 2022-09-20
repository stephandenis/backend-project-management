import { gql } from 'apollo-server-express';

const enumTypes = gql`
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

  enum InscriptionStatus {
    ACCEPTED
    REJECTED
    PENDING
  }
`;

export { enumTypes };
