enum Role {
  DEVELOPER = 'DEVELOPER',
  LEADER = 'LEADER',
  ADMIN = 'ADMIN',
}

enum UserStatus {
  PENDING = 'PENDING',
  AUTHORIZED = 'AUTHORIZED',
  UNAUTHORIZED = 'UNAUTHORIZED',
}

enum ProjectStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

enum ProjectPhase {
  STARTED = 'STARTED',
  DEVELOPMENT = 'DEVELOPMENT',
  COMPLETED = 'COMPLETED',
  NULL = 'NULL',
}

enum ObjectiveType {
  GENERAL = 'GENERAL',
  SPECIFIC = 'SPECIFIC',
}

enum InscriptionStatus {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
}

export {
  Role,
  UserStatus,
  ProjectStatus,
  ProjectPhase,
  ObjectiveType,
  InscriptionStatus,
};
