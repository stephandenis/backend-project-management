import { gql } from 'apollo-server-express';
import { enumTypes } from '../models/enums/types';
import { userTypes } from '../models/user/types';
import { projectTypes } from '../models/project/types';
import { advanceTypes } from '../models/advance/types';
const globalTypes = gql`
  scalar Date
`;

export const types = [
  globalTypes,
  enumTypes,
  userTypes,
  projectTypes,
  advanceTypes,
];
