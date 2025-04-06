import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to the Database successfully');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
};