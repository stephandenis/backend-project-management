import { AdvanceModel } from './advance';

const advanceResolvers = {
  Query: {
    Advances: async (parent, args) => {
      const advances = await AdvanceModel.find();
      return advances;
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
