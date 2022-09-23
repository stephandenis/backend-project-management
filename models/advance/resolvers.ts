import { AdvanceModel } from './advance';

const advanceResolvers = {
  Query: {
    Advances: async (parent, args) => {
      const advances = await AdvanceModel.find()
        .populate('project')
        .populate('createdBy');
      return advances;
    },
    filterAdvance: async (parent, args) => {
      const filteredAdvance = await AdvanceModel.find({
        project: args._id,
      })
        .populate('project')
        .populate('createdBy');
      return filteredAdvance;
    },
  },
  Mutation: {
    createAdvance: async (parent, args) => {
      const createdAdvance = AdvanceModel.create({
        date: args.date,
        description: args.description,
        project: args.project,
        createdBy: args.createdBy,
      });
      return createdAdvance;
    },
  },
};

export { advanceResolvers };
