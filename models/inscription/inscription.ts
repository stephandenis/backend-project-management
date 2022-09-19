import { Schema, model } from 'mongoose';
import { InscriptionStatus } from '../enums/enums';
import { ProjectModel } from '../project/project';
import { UserModel } from '../user/user';

interface Inscription {
  status: InscriptionStatus;
  entryDate: Date;
  exitDate: Date;
  project: Schema.Types.ObjectId;
  developer: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>({
  status: {
    type: String,
    enum: InscriptionStatus,
    required: true,
  },
  entryDate: {
    type: Date,
    required: true,
  },
  exitDate: {
    type: Date,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  developer: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel };
