import "./css/style.css";
import { generateWeatherPage } from "./dom";
import { addListenerToSearchButton } from "./search-box";
import { convertUTCToTimezone } from "./date";

fetchWeatherData("Fortaleza");
addListenerToSearchButton();

async function fetchWeatherData(location) {
  try {
    const API_KEY = "d3bb1e3bed4381c130b23c941a594404";
    //Fetch data
    const fetchedCurrentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`,
      { mode: "cors" }
    );
    const fetchedForecastWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`,
      { mode: "cors" }
    );

    //Get json
    const fullWeatherData = await fetchedCurrentWeatherData.json();
    const fullForecastData = await fetchedForecastWeatherData.json();
    console.log(await fullWeatherData);
    console.log(await fullForecastData);

    //Store data
    const locationWeatherData = await storeLocationWeatherData(fullWeatherData);
    const infoWeatherData = await storeInfoWeatherData(
      fullWeatherData,
      fullForecastData
    );
    console.log(await locationWeatherData);
    console.log(await infoWeatherData);

    //Generate the page
    await generateWeatherPage(locationWeatherData);
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}

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
  console.log(infoWeatherData.sunrise);
  return infoWeatherData;
}

export { fetchWeatherData };
