export interface WeatherIcon {
  description: string;
  image: string;
}

export interface WeatherCode {
  day: WeatherIcon;
  night: WeatherIcon;
}

export interface WeatherCodes {
  [key: string]: WeatherCode | undefined;
}

export interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    is_day: number;
    weather_code: number;
    wind_speed_10m: number;
    apparent_temperature: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
}

export interface DailyForecast {
  date: string;
  weatherCode: WeatherIcon;
  maxTemp: number;
  minTemp: number;
  precipitationProbability: number;
}

export interface Coords {
  lat: number;
  lon: number;
}

export interface SearchResult {
  lat: number;
  lon: number;
  name: string;
  country: string;
}
