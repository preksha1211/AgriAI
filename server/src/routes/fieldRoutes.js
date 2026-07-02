import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createField,
  getFields,
  getFieldById,
  updateField,
  deleteField,
} from "../controllers/fieldController.js";

const router = express.Router();

router.post("/", protect, createField);

router.get("/", protect, getFields);

router.get("/:id", protect, getFieldById);

router.put("/:id", protect, updateField);

router.delete("/:id", protect, deleteField);

export default router;