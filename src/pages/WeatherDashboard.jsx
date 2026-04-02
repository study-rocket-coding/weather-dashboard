import { useState, useEffect } from "react";
import { weatherCodes } from "../constants/weatherCodes";
import CurrentWeather from "../components/CurrentWeather";

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,apparent_temperature&timezone=auto&past_days=7')
      .then(res => res.json())
      .then(data => setWeather(data))
  }, []) // [] 代表只在第一次 render 後執行一次

  const [region, city] = weather?.timezone?.split('/') || [];

  const code = String(weather?.current?.weather_code);
  const isDay = weather?.current?.is_day;
  const currentWeatherCode = weatherCodes[code]?.[isDay ? "day" : "night"];

  return (
    <>
      <div className="container mx-auto p-4 md:p-10 max-w-5xl">
        <div className="flex flex-col gap-2 p-6 md:p-10">
          <h2 className="text-4xl text-sky-900 font-bold">{city}, {region}</h2>
        </div>
        <CurrentWeather
          weather={weather}
          weatherCode={currentWeatherCode}
        />
      </div>
    </>
  )
}

export default WeatherDashboard;