import { Schema, model } from 'mongoose';
import { ProjectStatus, ProjectPhase, ObjectiveType } from '../enums/enums';
import { ObjectiveModel } from '../objective';
import { UserModel } from '../user/user';

interface Project {
  name: string;
  budget: number;
  startDate: Date;
  endDate: Date;
  status: ProjectStatus;
  phase: ProjectPhase;
  leader: Schema.Types.ObjectId;
  objectives: [{ description: String; type: ObjectiveType }];
}

const projectSchema = new Schema<Project>(
  {
    name: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ProjectStatus,
      default: ProjectStatus.INACTIVE,
    },
    phase: {
      type: String,
      enum: ProjectPhase,
      default: ProjectPhase.NULL,
    },
    leader: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
    },
    objectives: [
      {
        description: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ObjectiveType,
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

projectSchema.virtual('advances', {
  ref: 'Advance',
  localField: '_id',
  foreignField: 'project',
});

projectSchema.virtual('inscriptions', {
  ref: 'Inscription',
  localField: '_id',
  foreignField: 'project',
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
