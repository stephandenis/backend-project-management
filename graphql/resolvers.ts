import { advanceResolvers } from '../models/advance/resolvers';
import { projectResolvers } from '../models/project/resolvers';
import { userResolvers } from '../models/user/resolvers';

export const resolvers = [userResolvers, projectResolvers, advanceResolvers];
