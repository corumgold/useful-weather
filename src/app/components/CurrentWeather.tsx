"use client";

import { useEffect, useState } from "react";
import { currentWeatherAPI } from "../utils";

const CurrentWeather: React.FC = () => {
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentFeelsTemp, setCurrentFeelsTemp] = useState<number>(0);
  const [error, setError] = useState<String>("");

  useEffect(() => {
    async function fetchCurrentWeather() {
      const response = await fetch(currentWeatherAPI);
      const data = await response.json();

      if (response.status === 200) {
        setError("");
        setCurrentTemp(data.current.temp_f);
        setCurrentFeelsTemp(data.current.feelslike_f);
      } else {
        setError("There was an issue fetching the weather data.");
      }
    }
    fetchCurrentWeather();
  });

  return (
    <div className="rounded-xl border p-4">
      <h3 className="pb-2  text-center text-xl">Temperature: {currentTemp}</h3>
      <h3 className="text-center text-xl">Feels Like: {currentFeelsTemp}</h3>
    </div>
  );
};

export default CurrentWeather;
