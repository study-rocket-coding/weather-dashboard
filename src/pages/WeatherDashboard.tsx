// 邏輯、型別與常數
import { useWeather } from "@/hooks/useWeather";
import { weatherCodes } from "@/constants/weatherCodes";
import { weatherIcons } from "@/constants/imagePaths";
import type { DailyForecast, WeatherIcon } from "@/types/weather";

// UI 組件
import Header from "@/components/Header";
import CurrentWeather from "@/components/CurrentWeather";
import Forecast from "@/components/Forecast";
import Footer from "@/components/Footer";
import ErrorMessage from "@/components/ErrorMessage";

// Skeletons
import CurrentWeatherSkeleton from "@/components/skeletons/CurrentWeatherSkeleton";
import ForecastSkeleton from "@/components/skeletons/ForecastSkeleton";

// 當找不到對應天氣代碼時的回退資料 (Fallback)
const unknownWeather: WeatherIcon = {
  description: "N/A",
  image: weatherIcons["not-available"].src,
};

function WeatherDashboard() {
  // 從自定義 Hook 取得天氣資料與狀態管理
  const { weather, locationName, status, error, handleSearch, retry } =
    useWeather();

  // 根據當前狀態 (loading, error, success) 渲染對應的內容
  const renderContent = () => {
    if (status === "error") {
      return (
        <ErrorMessage
          message={error || "An unknown error occurred"}
          onRetry={retry}
        />
      );
    }

    if (status === "loading") {
      return (
        <div className="grid grid-cols-1 gap-10">
          <CurrentWeatherSkeleton />
          <ForecastSkeleton />
        </div>
      );
    }

    if (status === "success" && weather) {
      const code = String(weather.current.weather_code);
      const isDay = weather.current.is_day === 1;
      const currentWeatherCode =
        weatherCodes[code]?.[isDay ? "day" : "night"] || unknownWeather;

      // 將原始資料轉換為預報組件所需的格式，若找不到天氣代碼則回退至 unknownWeather
      const dailyForecasts: DailyForecast[] = weather.daily.time.map(
        (date, dayIndex) => {
          const code = String(weather.daily.weather_code[dayIndex]);
          const weatherIcon = weatherCodes[code]?.day || unknownWeather;

          return {
            date,
            weatherCode: weatherIcon,
            maxTemp: weather.daily.temperature_2m_max[dayIndex],
            minTemp: weather.daily.temperature_2m_min[dayIndex],
            precipitationProbability:
              weather.daily.precipitation_probability_max[dayIndex],
          };
        },
      );

      return (
        <div className="grid grid-cols-1 gap-10">
          <CurrentWeather weather={weather} weatherCode={currentWeatherCode} />
          <Forecast forecasts={dailyForecasts} />
        </div>
      );
    }

    return null;
  };

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

          {renderContent()}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default WeatherDashboard;
