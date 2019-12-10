import express from "express";

import { getColors } from "../controllers/colorController";

const router = express.Router();
router.get("/", getColors);

export default router;
