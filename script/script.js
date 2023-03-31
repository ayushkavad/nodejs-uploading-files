import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Media from '../models/mediaModel.js';
import Course from './../models/courseModel.js';

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connection successfully...');
  });

const deleteData = async (req, res, next) => {
  try {
    await Media.deleteMany();
    await Course.deleteMany();
    console.log('Delete data successfully...');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  //   importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
