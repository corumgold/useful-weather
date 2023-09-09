"use client";

import { useEffect, useState } from "react";
import { currentWeatherAPI } from "../utils";

const CurrentWeather: React.FC = () => {
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentFeelsTemp, setCurrentFeelsTemp] = useState<number>(0);
  const [currentCondition, setCurrentCondition] = useState<string>("");
  const [locationName, setLocationName] = useState<string>("");
  const [locationRegion, setLocationRegion] = useState<string>("");
  const [error, setError] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCurrentWeather() {
      setLoading(true);
      const response = await fetch(currentWeatherAPI);
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        setLoading(false);
        setError("");
        setCurrentTemp(Math.floor(data.current.temp_f));
        setCurrentFeelsTemp(Math.floor(data.current.feelslike_f));
        setCurrentCondition(data.current.condition.text);
        setLocationName(data.location.name);
        setLocationRegion(data.location.region);
      } else {
        setError("There was an issue fetching the weather data.");
      }
    }
    fetchCurrentWeather();
  }, []);

  return error ? (
    <h3>{error}</h3>
  ) : (
    !loading && (
      <div className="rounded-xl border p-4 ">
        <p className="pb-2  text-center">
          In {locationName}, {locationRegion}, the current weather is:
        </p>
        <h3 className="pb-2  text-center text-xl">
          {currentTemp} (Feels Like: {currentFeelsTemp})
        </h3>
        <p className="text-center text-lg">{currentCondition}</p>
      </div>
    )
  );
};

export default CurrentWeather;
