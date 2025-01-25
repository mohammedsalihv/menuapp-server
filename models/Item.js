import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },
  menu: {
    type: String,
    required: true,
  },
});

const item = mongoose.model("Item", itemSchema);
export default item;
