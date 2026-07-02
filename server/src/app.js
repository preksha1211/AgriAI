import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import fieldRoutes from "./routes/fieldRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AgriAI Backend Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/fields", fieldRoutes);
app.use("/api/weather", weatherRoutes);

export default app;