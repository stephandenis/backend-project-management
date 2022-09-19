import { Schema, model } from 'mongoose';
import { Role, UserStatus } from '../enums/enums';

interface User {
  email: string;
  identification: string;
  name: string;
  lastName: string;
  role: Role;
  status: UserStatus;
}

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      // (email) => {
      //   if (email.includes('@') && email.includes('.')) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      message: 'El formato del email electrónico está malo.',
    },
  },
  identification: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: Role,
  },
  status: {
    type: String,
    enum: UserStatus,
    default: UserStatus.PENDING,
  },
});

const UserModel = model('User', userSchema);

export { UserModel };
