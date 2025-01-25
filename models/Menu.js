import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  menuDescription: {
    type: String,
    required: true,
  },
});

const menu = mongoose.model("Menu", menuSchema);

export default menu;
