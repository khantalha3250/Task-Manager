import express from "express";
import cors from "cors";
import prisma from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import taskRoutes from "./routes/task.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});
app.get("/users-test", async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated" });
});
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);
export default app;
