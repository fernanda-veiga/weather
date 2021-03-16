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
    forecast: {
      day01: {
        min: calculateAvarageTemp(fullForecastData.list, 0, "min"),
      },
    },
  };
  console.log(infoWeatherData.forecast.day01.min);
  return infoWeatherData;
}

function calculateAvarageTemp(fullArray, indexStart, minOrMax) {
  const currentDayArray = fullArray.slice(indexStart, 8);
  const tempArray = currentDayArray.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.main[`temp_${minOrMax}`]);
    return previousValue;
  }, []);
  const sumTemp = tempArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  const avgTemp = sumTemp / tempArray.length;
  return avgTemp.toFixed(0);
}

export { storeLocationWeatherData, storeInfoWeatherData };
