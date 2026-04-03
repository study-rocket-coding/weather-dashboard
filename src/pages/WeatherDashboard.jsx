import { useState, useEffect } from "react";
import { weatherCodes } from "../constants/weatherCodes";
import Header from "../components/Header";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Footer from "../components/Footer";

function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [coords, setCoords] = useState({ lat: 22.61626, lon: 120.31333 });
  const [locationName, setLocationName] = useState('Kaohsiung, Taiwan');

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
    <div className="min-h-screen pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 頂部搜尋與 Logo */}
        <Header onSearch={handleSearch} />

        {/* 主要內容區塊，包含進場動畫 */}
        <main className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* 城市名稱與底線裝飾 */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {locationName}
            </h2>
            <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <CurrentWeather
              weather={weather}
              weatherCode={currentWeatherCode}
            />
            
            <Forecast
              forecasts={dailyForecasts}
            />
          </div>
        </main>

        {/* 獨立的頁尾組件 */}
        <Footer />
      </div>
    </div>
  )
}

export default WeatherDashboard;