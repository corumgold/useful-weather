"use client";

import { useEffect, useState } from "react";
import { currentWeatherAPI } from "../utils";

export default function CurrentWeather() {
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentFeelsTemp, setCurrentFeelsTemp] = useState(0);

  useEffect(() => {
    async function fetchCurrentWeather() {
      const response = await fetch(currentWeatherAPI);
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setCurrentTemp(data.current.temp_f);
        setCurrentFeelsTemp(data.current.feelslike_f);
      } else {
        throw new Error(data.error.message);
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
}
