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
