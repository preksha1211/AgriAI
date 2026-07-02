import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1";

export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: city,
          aqi: "no",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getForecastWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: city,
          days: 7,
          aqi: "no",
          alerts: "yes",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};