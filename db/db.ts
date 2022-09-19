import { connect } from 'mongoose';

const connectDB = async () => {
  return await connect(process.env.DATABASE_URL!)
    .then(() => {
      console.log('Success');
    })
    .catch((e) => {
      console.error('Connection failed', e);
    });
};

export { connectDB };
