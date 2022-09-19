import { ProjectModel } from '../models/project';
import { UserModel } from '../models/user';

const resolvers = {
  Query: {
    Users: async (parent: any) => {
      const users = await UserModel.find();
      return users;
    },
    User: async (parent: any, args: { _id: any }) => {
      const user = await UserModel.findOne({ _id: args._id });
      return user;
    },
    Projects: async (parent: any, args: any) => {
      const projects = await ProjectModel.find().populate('leader');
      return projects;
    },
  },
  Mutation: {
    createUser: async (
      parent: any,
      args: {
        name?: any;
        lastName?: any;
        identification?: any;
        email?: any;
        role?: any;
        status?: any;
      }
    ) => {
      const createdUser = await UserModel.create({
        name: args.name,
        lastName: args.lastName,
        identification: args.identification,
        email: args.email,
        role: args.role,
      });

      if (Object.keys(args).includes('status')) {
        createdUser.status = args.status;
      }

      return createdUser;
    },
    editUser: async (
      parent: any,
      args: {
        _id: any;
        name: any;
        lastName: any;
        identification: any;
        email: any;
        role: any;
        status: any;
      }
    ) => {
      const editedUser = await UserModel.findByIdAndUpdate(args._id, {
        name: args.name,
        lastName: args.lastName,
        identification: args.identification,
        email: args.email,
        role: args.role,
        status: args.status,
      });

      return editedUser;
    },
    deleteUser: async (parent: any, args: { _id?: any; email?: any }) => {
      if (Object.keys(args).includes('_id')) {
        const deletedUser = await UserModel.findOneAndDelete({
          _id: args._id,
        });
        return deletedUser;
      } else if (Object.keys(args).includes('email')) {
        const deletedUser = await UserModel.findOneAndDelete({
          email: args.email,
        });
        return deletedUser;
      }
    },
    createProject: async (
      parent: any,
      args: {
        name: any;
        status: any;
        phase: any;
        startDate: any;
        endDate: any;
        budget: any;
        leader: any;
        objectives: any;
      }
    ) => {
      const createdProject = await ProjectModel.create({
        name: args.name,
        status: args.status,
        phase: args.phase,
        startDate: args.startDate,
        endDate: args.endDate,
        budget: args.budget,
        leader: args.leader,
        objectives: args.objectives,
      });
      return createdProject;
    },
  },
};

export { resolvers };
