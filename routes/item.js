import express from "express";
import { addItem, listItems } from "../controllers/item.controller.js";

const router = express.Router();

router.post("/add-item", addItem);

router.get("/items", listItems);

export default router;
