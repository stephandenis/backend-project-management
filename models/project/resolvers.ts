import { ProjectModel } from './project';

const projectResolvers = {
  Query: {
    Projects: async (parent: any, args: any) => {
      const projects = await ProjectModel.find().populate('leader');
      return projects;
    },
  },
  Mutation: {
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

export { projectResolvers };
