import express from "express";
import { addMenu, menuList } from "../controllers/menu.controller.js";

const router = express.Router();

router.post("/add-menu", addMenu);

router.get("/menulist", menuList);

export default router;
