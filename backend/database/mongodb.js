import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Please define the mongoDB uri in dev/production");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("connected to database");
  } catch (error) {
    console.error("Error connecting to Database", error);
  }
};

export default connectToDatabase;
