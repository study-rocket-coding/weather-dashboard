import { weatherIcons } from "./imagePaths";

export const weatherCodes = {
  "0": {
    day: {
      description: "Sunny",
      image: weatherIcons["clear-day"].src,
    },
    night: {
      description: "Clear",
      image: weatherIcons["clear-night"].src,
    },
  },
  "1": {
    day: {
      description: "Mainly Sunny",
      image: weatherIcons["clear-day"].src,
    },
    night: {
      description: "Mainly Clear",
      image: weatherIcons["clear-night"].src,
    },
  },
  "2": {
    day: {
      description: "Partly Cloudy",
      image: weatherIcons["partly-cloudy-day"].src,
    },
    night: {
      description: "Partly Cloudy",
      image: weatherIcons["partly-cloudy-night"].src,
    },
  },
  "3": {
    day: {
      description: "Cloudy",
      image: weatherIcons["overcast-day"].src,
    },
    night: {
      description: "Cloudy",
      image: weatherIcons["overcast-night"].src,
    },
  },
  "45": {
    day: {
      description: "Foggy",
      image: weatherIcons["fog-day"].src,
    },
    night: {
      description: "Foggy",
      image: weatherIcons["fog-night"].src,
    },
  },
  "48": {
    day: {
      description: "Rime Fog",
      image: weatherIcons["fog-day"].src,
    },
    night: {
      description: "Rime Fog",
      image: weatherIcons["fog-night"].src,
    },
  },
  "51": {
    day: {
      description: "Light Drizzle",
      image: weatherIcons["partly-cloudy-day-drizzle"].src,
    },
    night: {
      description: "Light Drizzle",
      image: weatherIcons["partly-cloudy-night-drizzle"].src,
    },
  },
  "53": {
    day: {
      description: "Drizzle",
      image: weatherIcons["drizzle"].src,
    },
    night: {
      description: "Drizzle",
      image: weatherIcons["drizzle"].src,
    },
  },
  "55": {
    day: {
      description: "Heavy Drizzle",
      image: weatherIcons["drizzle"].src,
    },
    night: {
      description: "Heavy Drizzle",
      image: weatherIcons["drizzle"].src,
    },
  },
  "56": {
    day: {
      description: "Light Freezing Drizzle",
      image: weatherIcons["partly-cloudy-day-sleet"].src,
    },
    night: {
      description: "Light Freezing Drizzle",
      image: weatherIcons["partly-cloudy-night-sleet"].src,
    },
  },
  "57": {
    day: {
      description: "Freezing Drizzle",
      image: weatherIcons["sleet"].src,
    },
    night: {
      description: "Freezing Drizzle",
      image: weatherIcons["sleet"].src,
    },
  },
  "61": {
    day: {
      description: "Light Rain",
      image: weatherIcons["partly-cloudy-day-rain"].src,
    },
    night: {
      description: "Light Rain",
      image: weatherIcons["partly-cloudy-night-rain"].src,
    },
  },
  "63": {
    day: {
      description: "Rain",
      image: weatherIcons["rain"].src,
    },
    night: {
      description: "Rain",
      image: weatherIcons["rain"].src,
    },
  },
  "65": {
    day: {
      description: "Heavy Rain",
      image: weatherIcons["rain"].src,
    },
    night: {
      description: "Heavy Rain",
      image: weatherIcons["rain"].src,
    },
  },
  "66": {
    day: {
      description: "Light Freezing Rain",
      image: weatherIcons["sleet"].src,
    },
    night: {
      description: "Light Freezing Rain",
      image: weatherIcons["sleet"].src,
    },
  },
  "67": {
    day: {
      description: "Freezing Rain",
      image: weatherIcons["sleet"].src,
    },
    night: {
      description: "Freezing Rain",
      image: weatherIcons["sleet"].src,
    },
  },
  "71": {
    day: {
      description: "Light Snow",
      image: weatherIcons["partly-cloudy-day-snow"].src,
    },
    night: {
      description: "Light Snow",
      image: weatherIcons["partly-cloudy-night-snow"].src,
    },
  },
  "73": {
    day: {
      description: "Snow",
      image: weatherIcons["snow"].src,
    },
    night: {
      description: "Snow",
      image: weatherIcons["snow"].src,
    },
  },
  "75": {
    day: {
      description: "Heavy Snow",
      image: weatherIcons["snow"].src,
    },
    night: {
      description: "Heavy Snow",
      image: weatherIcons["snow"].src,
    },
  },
  "77": {
    day: {
      description: "Snow Grains",
      image: weatherIcons["hail"].src,
    },
    night: {
      description: "Snow Grains",
      image: weatherIcons["hail"].src,
    },
  },
  "80": {
    day: {
      description: "Light Showers",
      image: weatherIcons["partly-cloudy-day-rain"].src,
    },
    night: {
      description: "Light Showers",
      image: weatherIcons["partly-cloudy-night-rain"].src,
    },
  },
  "81": {
    day: {
      description: "Showers",
      image: weatherIcons["rain"].src,
    },
    night: {
      description: "Showers",
      image: weatherIcons["rain"].src,
    },
  },
  "82": {
    day: {
      description: "Heavy Showers",
      image: weatherIcons["rain"].src,
    },
    night: {
      description: "Heavy Showers",
      image: weatherIcons["rain"].src,
    },
  },
  "85": {
    day: {
      description: "Light Snow Showers",
      image: weatherIcons["partly-cloudy-day-snow"].src,
    },
    night: {
      description: "Light Snow Showers",
      image: weatherIcons["partly-cloudy-night-snow"].src,
    },
  },
  "86": {
    day: {
      description: "Snow Showers",
      image: weatherIcons["snow"].src,
    },
    night: {
      description: "Snow Showers",
      image: weatherIcons["snow"].src,
    },
  },
  "95": {
    day: {
      description: "Thunderstorm",
      image: weatherIcons["thunderstorms-day"].src,
    },
    night: {
      description: "Thunderstorm",
      image: weatherIcons["thunderstorms-night"].src,
    },
  },
  "96": {
    day: {
      description: "Light Thunderstorms With Hail",
      image: weatherIcons["thunderstorms-day-rain"].src,
    },
    night: {
      description: "Light Thunderstorms With Hail",
      image: weatherIcons["thunderstorms-night-rain"].src,
    },
  },
  "99": {
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
