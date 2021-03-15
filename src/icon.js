import iconAsh from "./icons/ash.svg";
import iconClearDay from "./icons/clear-day.svg";
import iconClearNight from "./icons/clear-night.svg";
import iconClouds from "./icons/clouds.svg";
import iconDrizzle from "./icons/drizzle.svg";
import iconDustAndSand from "./icons/dust-sand.svg";
import iconHazeAndFog from "./icons/haze-fog.svg";
import iconMist from "./icons/mist.svg";
import iconRain from "./icons/rain.svg";
import iconSmoke from "./icons/smoke.svg";
import iconSnow from "./icons/snow.svg";
import iconSquallAndTornado from "./icons/squall-tornado.svg";
import iconThunderstorm from "./icons/thunderstorm.svg";

const weatherIconObject = {
  Ash: iconAsh,
  Clear: iconClearDay,
  Clouds: iconClouds,
  Drizzle: iconDrizzle,
  Dust: iconDustAndSand,
  Sand: iconDustAndSand,
  Haze: iconHazeAndFog,
  Fog: iconHazeAndFog,
  Mist: iconMist,
  Rain: iconRain,
  Smoke: iconSmoke,
  Snow: iconSnow,
  Squall: iconSquallAndTornado,
  Tornado: iconSquallAndTornado,
  Thunderstorm: iconThunderstorm,
};

function generateWeatherIcon(currentWeather) {
  return weatherIconObject[currentWeather];
}

export { generateWeatherIcon };
