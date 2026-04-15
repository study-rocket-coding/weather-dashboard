import { weatherIcons } from "@/constants/imagePaths";
import type { WeatherCodes, WeatherCode } from "@/types/weather";

// 1. 代碼與天氣狀態名稱的對應 (Code to State Name)
export const weatherCodeMap: Record<string, string> = {
  "0": "Clear",
  "1": "Mainly Sunny",
  "2": "Partly Cloudy",
  "3": "Cloudy",
  "45": "Foggy",
  "48": "Rime Fog",
  "51": "Light Drizzle",
  "53": "Drizzle",
  "55": "Heavy Drizzle",
  "56": "Light Freezing Drizzle",
  "57": "Freezing Drizzle",
  "61": "Light Rain",
  "63": "Rain",
  "65": "Heavy Rain",
  "66": "Light Freezing Rain",
  "67": "Freezing Rain",
  "71": "Light Snow",
  "73": "Snow",
  "75": "Heavy Snow",
  "77": "Snow Grains",
  "80": "Light Showers",
  "81": "Showers",
  "82": "Heavy Showers",
  "85": "Light Snow Showers",
  "86": "Snow Showers",
  "95": "Thunderstorm",
  "96": "Light Thunderstorms With Hail",
  "99": "Thunderstorm With Hail",
};

// 2. 天氣狀態名稱對應的詳細 UI 資料 (State Name to UI Data Mapping)
const weatherStateUI: Record<string, WeatherCode> = {
  "Clear": {
    day: { description: "Sunny", image: weatherIcons["clear-day"].src },
    night: { description: "Clear", image: weatherIcons["clear-night"].src },
  },
  "Mainly Sunny": {
    day: { description: "Mainly Sunny", image: weatherIcons["clear-day"].src },
    night: {
      description: "Mainly Clear",
      image: weatherIcons["clear-night"].src,
    },
  },
  "Partly Cloudy": {
    day: {
      description: "Partly Cloudy",
      image: weatherIcons["partly-cloudy-day"].src,
    },
    night: {
      description: "Partly Cloudy",
      image: weatherIcons["partly-cloudy-night"].src,
    },
  },
  "Cloudy": {
    day: { description: "Cloudy", image: weatherIcons["overcast-day"].src },
    night: { description: "Cloudy", image: weatherIcons["overcast-night"].src },
  },
  "Foggy": {
    day: { description: "Foggy", image: weatherIcons["fog-day"].src },
    night: { description: "Foggy", image: weatherIcons["fog-night"].src },
  },
  "Rime Fog": {
    day: { description: "Rime Fog", image: weatherIcons["fog-day"].src },
    night: { description: "Rime Fog", image: weatherIcons["fog-night"].src },
  },
  "Light Drizzle": {
    day: {
      description: "Light Drizzle",
      image: weatherIcons["partly-cloudy-day-drizzle"].src,
    },
    night: {
      description: "Light Drizzle",
      image: weatherIcons["partly-cloudy-night-drizzle"].src,
    },
  },
  "Drizzle": {
    day: { description: "Drizzle", image: weatherIcons["drizzle"].src },
    night: { description: "Drizzle", image: weatherIcons["drizzle"].src },
  },
  "Heavy Drizzle": {
    day: { description: "Heavy Drizzle", image: weatherIcons["drizzle"].src },
    night: { description: "Heavy Drizzle", image: weatherIcons["drizzle"].src },
  },
  "Light Freezing Drizzle": {
    day: {
      description: "Light Freezing Drizzle",
      image: weatherIcons["partly-cloudy-day-sleet"].src,
    },
    night: {
      description: "Light Freezing Drizzle",
      image: weatherIcons["partly-cloudy-night-sleet"].src,
    },
  },
  "Freezing Drizzle": {
    day: { description: "Freezing Drizzle", image: weatherIcons["sleet"].src },
    night: { description: "Freezing Drizzle", image: weatherIcons["sleet"].src },
  },
  "Light Rain": {
    day: {
      description: "Light Rain",
      image: weatherIcons["partly-cloudy-day-rain"].src,
    },
    night: {
      description: "Light Rain",
      image: weatherIcons["partly-cloudy-night-rain"].src,
    },
  },
  "Rain": {
    day: { description: "Rain", image: weatherIcons["rain"].src },
    night: { description: "Rain", image: weatherIcons["rain"].src },
  },
  "Heavy Rain": {
    day: { description: "Heavy Rain", image: weatherIcons["rain"].src },
    night: { description: "Heavy Rain", image: weatherIcons["rain"].src },
  },
  "Light Freezing Rain": {
    day: { description: "Light Freezing Rain", image: weatherIcons["sleet"].src },
    night: {
      description: "Light Freezing Rain",
      image: weatherIcons["sleet"].src,
    },
  },
  "Freezing Rain": {
    day: { description: "Freezing Rain", image: weatherIcons["sleet"].src },
    night: { description: "Freezing Rain", image: weatherIcons["sleet"].src },
  },
  "Light Snow": {
    day: {
      description: "Light Snow",
      image: weatherIcons["partly-cloudy-day-snow"].src,
    },
    night: {
      description: "Light Snow",
      image: weatherIcons["partly-cloudy-night-snow"].src,
    },
  },
  "Snow": {
    day: { description: "Snow", image: weatherIcons["snow"].src },
    night: { description: "Snow", image: weatherIcons["snow"].src },
  },
  "Heavy Snow": {
    day: { description: "Heavy Snow", image: weatherIcons["snow"].src },
    night: { description: "Heavy Snow", image: weatherIcons["snow"].src },
  },
  "Snow Grains": {
    day: { description: "Snow Grains", image: weatherIcons["hail"].src },
    night: { description: "Snow Grains", image: weatherIcons["hail"].src },
  },
  "Light Showers": {
    day: {
      description: "Light Showers",
      image: weatherIcons["partly-cloudy-day-rain"].src,
    },
    night: {
      description: "Light Showers",
      image: weatherIcons["partly-cloudy-night-rain"].src,
    },
  },
  "Showers": {
    day: { description: "Showers", image: weatherIcons["rain"].src },
    night: { description: "Showers", image: weatherIcons["rain"].src },
  },
  "Heavy Showers": {
    day: { description: "Heavy Showers", image: weatherIcons["rain"].src },
    night: { description: "Heavy Showers", image: weatherIcons["rain"].src },
  },
  "Light Snow Showers": {
    day: {
      description: "Light Snow Showers",
      image: weatherIcons["partly-cloudy-day-snow"].src,
    },
    night: {
      description: "Light Snow Showers",
      image: weatherIcons["partly-cloudy-night-snow"].src,
    },
  },
  "Snow Showers": {
    day: { description: "Snow Showers", image: weatherIcons["snow"].src },
    night: { description: "Snow Showers", image: weatherIcons["snow"].src },
  },
  "Thunderstorm": {
    day: {
      description: "Thunderstorm",
      image: weatherIcons["thunderstorms-day"].src,
    },
    night: {
      description: "Thunderstorm",
      image: weatherIcons["thunderstorms-night"].src,
    },
  },
  "Light Thunderstorms With Hail": {
    day: {
      description: "Light Thunderstorms With Hail",
      image: weatherIcons["thunderstorms-day-rain"].src,
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image: weatherIcons["thunderstorms-night-rain"].src,
    },
  },
  "Thunderstorm With Hail": {
    day: {
      description: "Thunderstorm With Hail",
      image: weatherIcons["thunderstorms-rain"].src,
    },
    night: {
      description: "Thunderstorm With Hail",
      image: weatherIcons["thunderstorms-rain"].src,
    },
  },
};

// 3. 最終匯出的對照表
export const weatherCodes: WeatherCodes = Object.keys(weatherCodeMap).reduce(
  (acc, code) => {
    const stateName = weatherCodeMap[code];
    const uiData = weatherStateUI[stateName];

    if (!uiData) {
      console.warn(`Missing UI data for weather state: ${stateName}`);
      return acc;
    }

    return {
      ...acc,
      [code]: uiData,
    };
  },
  {} as WeatherCodes,
);
