import { useState, useEffect } from "react";
import { defaultLocation } from "@/constants/defaultLocation";
import type { WeatherData, Coords, SearchResult } from "@/types/weather";

export type WeatherStatus = "loading" | "error" | "success";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [coords, setCoords] = useState<Coords>({
    lat: defaultLocation.lat,
    lon: defaultLocation.lon,
  });
  const [locationName, setLocationName] = useState<string>(
    `${defaultLocation.name}, ${defaultLocation.country}`,
  );
  const [status, setStatus] = useState<WeatherStatus>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      setStatus("loading");
      setError(null);
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,apparent_temperature&timezone=auto`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data: WeatherData = await response.json();
        setWeather(data);
        setStatus("success");
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
        setStatus("error");
      }
    }

    fetchWeather();
  }, [coords]);

  const handleSearch = ({ lat, lon, name, country }: SearchResult) => {
    setCoords({ lat, lon });
    setLocationName(`${name}, ${country}`);
  };

  const retry = () => {
    setCoords({ ...coords });
  };

  return {
    weather,
    coords,
    locationName,
    status,
    error,
    handleSearch,
    retry,
  };
}
