import {
  getCurrentWeather,
  getForecastWeather,
} from "../services/weatherService.js";

export const currentWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required",
      });
    }

    const weather = await getCurrentWeather(city);

    return res.status(200).json({
      success: true,
      weather,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.response?.data?.error?.message ||
        "Failed to fetch current weather",
    });
  }
};

export const forecastWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required",
      });
    }

    const forecast = await getForecastWeather(city);

    return res.status(200).json({
      success: true,
      forecast,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.response?.data?.error?.message ||
        "Failed to fetch weather forecast",
    });
  }
};