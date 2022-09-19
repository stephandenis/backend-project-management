import { Schema, model } from 'mongoose';
import { ObjectiveType } from './enums';
import { ProjectModel } from './project';

interface Objective {
  description: string;
  types: ObjectiveType;
}

const objectiveSchema = new Schema<Objective>({
  description: {
    type: String,
    required: true,
  },
  types: {
    type: String,
    enum: ObjectiveType,
    required: true,
  },
});

const ObjectiveModel = model('Objective', objectiveSchema);

export { ObjectiveModel };
