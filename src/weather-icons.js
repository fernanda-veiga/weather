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
    background: "linear-gradient(#190A05, #870000)",
  },
  Clear: {
    day: {
      icon: iconClearDay,
      background: "linear-gradient(#FF512F, #F09819)",
    },
    night: {
      icon: iconClearNight,
      background: "linear-gradient(#FF512F, #F09819)",
    },
  },
  Clouds: {
    icon: iconClouds,
    background: "linear-gradient(#616161, #9BC5C3)",
  },
  Drizzle: {
    icon: iconDrizzle,
    background: "linear-gradient(#191654, #43C6AC)",
  },
  Dust: {
    icon: iconDustAndSand,
    background: "linear-gradient(#94716B, #B79891)",
  },
  Sand: {
    icon: iconDustAndSand,
    background: "linear-gradient(#94716B, #B79891)",
  },
  Haze: {
    icon: iconHazeAndFog,
    background: "linear-gradient(#2C3E50, #BDC3C7)",
  },
  Fog: {
    icon: iconHazeAndFog,
    background: "linear-gradient(#2C3E50, #BDC3C7)",
  },
  Mist: {
    icon: iconMist,
    background: "linear-gradient(#4568DC, #B06AB3)",
  },
  Rain: {
    icon: iconRain,
    background: "linear-gradient(#2C3E50, #3498DB)",
  },
  Smoke: {
    icon: iconSmoke,
    background: "linear-gradient(#2C3E50, #BDC3C7)",
  },
  Snow: {
    icon: iconSnow,
    background: "linear-gradient(#636FA4, #E8CBC0)",
  },
  Squall: {
    icon: iconSquallAndTornado,
    background: "linear-gradient(#314755, #26A0DA)",
  },
  Tornado: {
    icon: iconSquallAndTornado,
    background: "linear-gradient(#314755, #26A0DA)",
  },
  Thunderstorm: {
    icon: iconThunderstorm,
    background: "linear-gradient(#29323C, #485563)",
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

function generateWeatherBackground(currentWeather) {
  return weatherObject[currentWeather].background;
}

export { generateWeatherIcon, generateWeatherBackground };
