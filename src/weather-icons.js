import iconAsh from "./icons/weather/ash.svg";
import iconClearDay from "./icons/weather/clear-day.svg";
import iconClearNight from "./icons/weather/clear-night.svg";
import iconClouds from "./icons/weather/clouds.svg";
import iconDrizzle from "./icons/weather/drizzle.svg";
import iconDustAndSand from "./icons/weather/dust-sand.svg";
import iconHazeAndFog from "./icons/weather/haze-fog.svg";
import iconMist from "./icons/weather/mist.svg";
import iconRain from "./icons/weather/rain.svg";
import iconSmoke from "./icons/weather/smoke.svg";
import iconSnow from "./icons/weather/snow.svg";
import iconSquallAndTornado from "./icons/weather/squall-tornado.svg";
import iconThunderstorm from "./icons/weather/thunderstorm.svg";

const weatherObject = {
  Ash: {
    icon: iconAsh,
    color: "#C31432",
    filter:
      "invert(21%) sepia(96%) saturate(4187%) hue-rotate(340deg) brightness(76%) contrast(100%)",
    background: "linear-gradient(#240B36, #C31432)",
  },
  Clear: {
    day: {
      icon: iconClearDay,
      color: "#FC4A1A",
      filter:
        "invert(52%) sepia(85%) saturate(5041%) hue-rotate(348deg) brightness(97%) contrast(103%)",
      background: "linear-gradient(#FC4A1A, #F7B733)",
    },
    night: {
      icon: iconClearNight,
      color: "#004E92",
      filter:
        "invert(19%) sepia(94%) saturate(1703%) hue-rotate(191deg) brightness(96%) contrast(101%)",
      background: "linear-gradient(#000428, #004E92)",
    },
  },
  Clouds: {
    icon: iconClouds,
    color: "#1488CC",
    filter:
      "invert(45%) sepia(61%) saturate(4575%) hue-rotate(179deg) brightness(92%) contrast(84%)",
    background: "linear-gradient(#2B32B2, #1488CC)",
  },
  Drizzle: {
    icon: iconDrizzle,
    color: "#0575E6",
    filter:
      "invert(28%) sepia(69%) saturate(2232%) hue-rotate(196deg) brightness(103%) contrast(97%)",
    background: "linear-gradient(#021B79, #0575E6)",
  },
  Dust: {
    icon: iconDustAndSand,
    color: "#E35D5D",
    filter:
      "invert(45%) sepia(60%) saturate(535%) hue-rotate(311deg) brightness(94%) contrast(103%)",
    background: "linear-gradient(#E53935, #E35D5D)",
  },
  Sand: {
    icon: iconDustAndSand,
    color: "#E35D5D",
    filter:
      "invert(45%) sepia(60%) saturate(535%) hue-rotate(311deg) brightness(94%) contrast(103%)",
    background: "linear-gradient(#E53935, #E35D5D)",
  },
  Haze: {
    icon: iconHazeAndFog,
    color: "#F56217",
    filter:
      "invert(62%) sepia(50%) saturate(6589%) hue-rotate(350deg) brightness(96%) contrast(100%)",
    background: "linear-gradient(#0B486B, #F56217)",
  },
  Fog: {
    icon: iconHazeAndFog,
    color: "#F56217",
    filter:
      "invert(62%) sepia(50%) saturate(6589%) hue-rotate(350deg) brightness(96%) contrast(100%)",
    background: "linear-gradient(#0B486B, #F56217)",
  },
  Mist: {
    icon: iconMist,
    color: "#136A8A",
    filter:
      "invert(30%) sepia(8%) saturate(4604%) hue-rotate(152deg) brightness(108%) contrast(90%)",
    background: "linear-gradient(#136A8A, #267871)",
  },
  Rain: {
    icon: iconRain,
    color: "#0575E6",
    filter:
      "invert(28%) sepia(69%) saturate(2232%) hue-rotate(196deg) brightness(103%) contrast(97%)",
    background: "linear-gradient(#021B79, #0575E6)",
  },
  Smoke: {
    icon: iconSmoke,
    color: "#2C5364",
    filter:
      "invert(26%) sepia(73%) saturate(334%) hue-rotate(153deg) brightness(91%) contrast(89%)",
    background: "linear-gradient(#0F2027, #2C5364)",
  },
  Snow: {
    icon: iconSnow,
    color: "#4568DC",
    filter:
      "invert(37%) sepia(27%) saturate(2801%) hue-rotate(202deg) brightness(95%) contrast(90%)",
    background: "linear-gradient(#4568DC, #B06AB3)",
  },
  Squall: {
    icon: iconSquallAndTornado,
    color: "#734B6D",
    filter:
      "invert(32%) sepia(20%) saturate(854%) hue-rotate(258deg) brightness(95%) contrast(90%)",
    background: "linear-gradient(#42275A, #734B6D)",
  },
  Tornado: {
    icon: iconSquallAndTornado,
    color: "#734B6D",
    filter:
      "invert(32%) sepia(20%) saturate(854%) hue-rotate(258deg) brightness(95%) contrast(90%)",
    background: "linear-gradient(#42275A, #734B6D)",
  },
  Thunderstorm: {
    icon: iconThunderstorm,
    color: "#232526",
    filter:
      "invert(12%) sepia(8%) saturate(278%) hue-rotate(156deg) brightness(99%) contrast(95%)",
    background: "linear-gradient(#232526, #414345)",
  },
};

function generateWeatherIcon(currentWeather, currentTimeOfDay = "d") {
  if (currentWeather === "Clear") {
    if (currentTimeOfDay === "d") {
      return weatherObject[currentWeather].day.icon;
    } else {
      return weatherObject[currentWeather].night.icon;
    }
  }
  return weatherObject[currentWeather].icon;
}

function generateWeatherColors(currentWeather, currentTimeOfDay = "d") {
  if (currentWeather === "Clear") {
    if (currentTimeOfDay === "d") {
      return [
        weatherObject[currentWeather].day.background,
        weatherObject[currentWeather].day.color,
        weatherObject[currentWeather].day.filter,
      ];
    } else {
      return [
        weatherObject[currentWeather].night.background,
        weatherObject[currentWeather].night.color,
        weatherObject[currentWeather].night.filter,
      ];
    }
  }
  return [
    weatherObject[currentWeather].background,
    weatherObject[currentWeather].color,
    weatherObject[currentWeather].filter,
  ];
}

export { generateWeatherIcon, generateWeatherColors };
