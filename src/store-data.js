import { convertUTCToTimezone } from "./date";

function storeLocationWeatherData(fullWeatherData) {
  const locationWeatherData = {
    city: fullWeatherData.name,
    country: fullWeatherData.sys.country,
    currentTemp: fullWeatherData.main.temp.toFixed(0),
    feelsLike: fullWeatherData.main.feels_like,
    currentWeather: fullWeatherData.weather[0].main,
  };
  return locationWeatherData;
}

function storeInfoWeatherData(fullWeatherData, fullForecastData) {
  const infoWeatherData = {
    sunrise: convertUTCToTimezone(
      fullWeatherData.sys.sunrise,
      fullWeatherData.timezone
    ),
    sunset: convertUTCToTimezone(
      fullWeatherData.sys.sunset,
      fullWeatherData.timezone
    ),
    humidity: fullWeatherData.main.humidity,
    windSpeed: fullWeatherData.wind.speed,
  };
  return infoWeatherData;
}

export { storeLocationWeatherData, storeInfoWeatherData };
