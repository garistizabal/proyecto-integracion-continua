import { exit } from 'node:process';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

import mongoose from 'mongoose';

// mongodb://username:password@localhost:27017/todosDB?authSource=admin
const MONGO_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`Connected to MongoDB successfully`);
  } catch (error) {
    console.log(`Couldn't connect to MongoDB`);
    exit(1);
  }
};
