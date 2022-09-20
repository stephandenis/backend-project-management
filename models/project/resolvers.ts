import { ProjectModel } from './project';

const projectResolvers = {
  Query: {
    Projects: async (parent, args) => {
      const projects = await ProjectModel.find()
        .populate('leader')
        .populate('advances')
        .populate('inscriptions');
      return projects;
    },
  },
  Mutation: {
    createProject: async (parent, args) => {
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
