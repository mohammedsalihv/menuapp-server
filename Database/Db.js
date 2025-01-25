import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Database = mongoose.connect('mongodb+srv://ezpanowhiffotp:x3aumh0Z2VIUZFrr@cluster0.q9upt.mongodb.net/?retryWrites=true&w=majority&appName=menuManager');
Database.then(() => {
  console.log("Database connected successfully");
}).catch((error) => {
  console.log("Database connection error", error);
});
