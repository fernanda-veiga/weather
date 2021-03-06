import { convertDateToTime, getDayOfTheWeek } from "./date";

function storeLocationWeatherData(fullWeatherData) {
  const locationWeatherData = {
    city: fullWeatherData.name,
    country: fullWeatherData.sys.country,
    currentTemp: fullWeatherData.main.temp.toFixed(0),
    currentWeather: fullWeatherData.weather[0].main,
    timeOfDay: fullWeatherData.weather[0].icon.slice(-1),
  };
  return locationWeatherData;
}

function storeInfoWeatherData(fullWeatherData, fullForecastData) {
  const infoWeatherData = {
    feelsLike: fullWeatherData.main.feels_like.toFixed(0),
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
    forecast: {
      day1: getParameters(
        fullForecastData.list,
        fullWeatherData.timezone,
        0,
        8
      ),
      day2: getParameters(
        fullForecastData.list,
        fullWeatherData.timezone,
        8,
        16
      ),
      day3: getParameters(
        fullForecastData.list,
        fullWeatherData.timezone,
        16,
        24
      ),
      day4: getParameters(
        fullForecastData.list,
        fullWeatherData.timezone,
        24,
        32
      ),
      day5: getParameters(
        fullForecastData.list,
        fullWeatherData.timezone,
        32,
        40
      ),
    },
  };
  return infoWeatherData;
}

function getParameters(fullArray, timezoneShift, indexStart, indexEnd) {
  const minAndMaxTemp = getMinAndMaxTemp(fullArray, indexStart, indexEnd);
  return {
    min: minAndMaxTemp[0],
    max: minAndMaxTemp[1],
    weather: fullArray[indexStart].weather[0].main,
    day: getDayOfTheWeek(fullArray[indexStart].dt, timezoneShift),
  };
}

function getMinAndMaxTemp(fullArray, indexStart, indexEnd) {
  const currentDayArray = fullArray.slice(indexStart, indexEnd);
  const tempArray = currentDayArray.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.main.temp);
    return previousValue;
  }, []);
  const minTemp = Math.min(...tempArray).toFixed(0);
  const maxTemp = Math.max(...tempArray).toFixed(0);
  return [minTemp, maxTemp];
}

export { storeLocationWeatherData, storeInfoWeatherData };
