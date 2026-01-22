import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createTask } from "../controllers/task.controller";
import { getTasks } from "../controllers/task.controller";
import { getTaskById } from "../controllers/auth.controller";
import { updateTask } from "../controllers/task.controller";
import { toggleTask } from "../controllers/task.controller";
import { deleteTask } from "../controllers/task.controller";

const router = Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.get("/:id", authMiddleware, getTaskById);
router.patch("/:id", authMiddleware, updateTask);
router.patch("/:id/toggle", authMiddleware, toggleTask);
router.delete("/:id", authMiddleware, deleteTask);
export default router;
