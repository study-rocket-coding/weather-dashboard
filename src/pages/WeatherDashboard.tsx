// Constants 與 Hooks
import { useState, useEffect } from "react";
import { weatherCodes } from "@/constants/weatherCodes";
import type { WeatherData, Coords, SearchResult, DailyForecast } from "@/types/weather";

// UI 組件
import Header from "@/components/Header";
import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import Footer from "@/components/Footer";
import ErrorMessage from "@/components/ErrorMessage";

// Skeletons
import CurrentWeatherSkeleton from "@/components/skeletons/CurrentWeatherSkeleton";
import ForecastSkeleton from "@/components/skeletons/ForecastSkeleton";

function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [coords, setCoords] = useState<Coords>({ lat: 22.61626, lon: 120.31333 });
  const [locationName, setLocationName] = useState<string>("Kaohsiung, Taiwan");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      setIsLoading(true);
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
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [coords]);

  function handleSearch({ lat, lon, name, country }: SearchResult) {
    setCoords({ lat, lon });
    setLocationName(`${name}, ${country}`);
  }

  const code = String(weather?.current?.weather_code);
  const isDay = weather?.current?.is_day === 1;
  const currentWeatherCode = weatherCodes[code]?.[isDay ? "day" : "night"];

  const dailyForecasts: DailyForecast[] =
    weather?.daily?.time.map((date, dayIndex) => {
      const code = String(weather.daily.weather_code[dayIndex]);
      const weatherCode = weatherCodes[code]?.day; // 預報通常用 day

      return {
        date,
        weatherCode: weatherCode!, // 我們假設 weatherCodes 裡一定有對應的資料，或者可以在這裡做 fallback
        maxTemp: weather.daily.temperature_2m_max[dayIndex],
        minTemp: weather.daily.temperature_2m_min[dayIndex],
        precipitationProbability:
          weather.daily.precipitation_probability_max[dayIndex],
      };
    }) || [];

  return (
    <div className="min-h-screen pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Header onSearch={handleSearch} />

        <main className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {locationName}
            </h2>
            <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          {error ? (
            <ErrorMessage
              message={error}
              onRetry={() => setCoords({ ...coords })}
            />
          ) : isLoading ? (
            <div className="grid grid-cols-1 gap-10">
              <CurrentWeatherSkeleton />
              <ForecastSkeleton />
            </div>
          ) : (
            /* 正常資料顯示區塊：確保 weather 與 currentWeatherCode 都有值才渲染 */
            weather &&
            currentWeatherCode && (
              <div className="grid grid-cols-1 gap-10">
                <CurrentWeather
                  weather={weather}
                  weatherCode={currentWeatherCode}
                />

                <Forecast forecasts={dailyForecasts} />
              </div>
            )
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default WeatherDashboard;
