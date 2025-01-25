import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Database = mongoose.connect(process.env.MONGO);
Database.then(() => {
  console.log("Database connected successfully");
}).catch((error) => {
  console.log("Database connection error", error);
});
