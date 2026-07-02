import express from "express";
import {
  currentWeather,
  forecastWeather,
} from "../controllers/weatherController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Current Weather
router.get("/current", protect, currentWeather);

// 7-Day Forecast
router.get("/forecast", protect, forecastWeather);

export default router;