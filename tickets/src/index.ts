import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  const { JWT_KEY = "", MONGO_URI = "" } = process.env;
  if (!JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();
