import { convertDateToTime } from "./date";

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
    sunrise: convertDateToTime(
      fullWeatherData.sys.sunrise,
      fullWeatherData.timezone
    ),
    sunset: convertDateToTime(
      fullWeatherData.sys.sunset,
      fullWeatherData.timezone
    ),
    windSpeed: fullWeatherData.wind.speed,
    humidity: fullWeatherData.main.humidity,
  };
  return infoWeatherData;
}

export { storeLocationWeatherData, storeInfoWeatherData };
