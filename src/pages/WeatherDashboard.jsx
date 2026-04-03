import { useState, useEffect } from "react";
import { weatherCodes } from "../constants/weatherCodes";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [coords, setCoords] = useState({ lat: 22.61626, lon: 120.31333 });
  const [locationName, setLocationName] = useState('Keelung, Taiwan');

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,apparent_temperature&timezone=auto`)
      .then(res => res.json())
      .then(data => setWeather(data))
  }, [coords])

  function handleSearch({ lat, lon, name, country }) {
    setCoords({ lat, lon });
    setLocationName(`${name}, ${country}`);
  }

  const code = String(weather?.current?.weather_code);
  const isDay = weather?.current?.is_day;
  const currentWeatherCode = weatherCodes[code]?.[isDay ? "day" : "night"];

  const dailyForecasts = weather?.daily?.time.map((date, index) => {
    const code = String(weather.daily.weather_code[index]);
    const weatherCode = weatherCodes[code]?.day;  // 預報通常用 day

    return {
      date,
      weatherCode,
      maxTemp: weather.daily.temperature_2m_max[index],
      minTemp: weather.daily.temperature_2m_min[index],
      precipitationProbability: weather.daily.precipitation_probability_max[index],
    }
  }) || [];

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 md:p-10 flex flex-col">
        <Header onSearch={handleSearch} />

        <main>
          <div className="p-6 md:p-10">
            <h2 className="text-4xl text-sky-900 font-bold">{locationName}</h2>
          </div>
          <div className="flex flex-col gap-7 md:gap-10">
            <CurrentWeather
              weather={weather}
              weatherCode={currentWeatherCode}
            />
            <Forecast
              forecasts={dailyForecasts}
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default WeatherDashboard;