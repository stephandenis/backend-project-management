import { InscriptionModel } from './inscription';

const inscriptionResolvers = {
  Query: {
    Inscriptions: async (parent, args) => {
      const inscriptions = await InscriptionModel.find();
      return inscriptions;
    },
  },
  Mutation: {
    createInscription: async (parent, args) => {
      const createdInscription = await InscriptionModel.create({
        status: args.status,
        project: args.project,
        developer: args.developer,
      });
      return createdInscription;
    },
    approveInscription: async (parent, args) => {
      const approvedInscription = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          status: 'APPROVED',
          entryDate: Date.now(),
        },
        { new: true }
      );
      return approvedInscription;
    },
  },
};

export { inscriptionResolvers };
