import "./css/style.css";
import { generateWeatherPage } from "./dom";

fetchWeatherData("Sydney");

async function fetchWeatherData(location) {
  try {
    const API_KEY = "d3bb1e3bed4381c130b23c941a594404";
    const fetchedCurrentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`,
      { mode: "cors" }
    );

    const fullWeatherData = await fetchedCurrentWeatherData.json();
    console.log(await fullWeatherData);
    const importantWeatherData = await storeImportantWeatherData(
      fullWeatherData
    );
    console.log(await importantWeatherData);
    await generateWeatherPage(importantWeatherData);
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}

function storeImportantWeatherData(fullWeatherData) {
  const importantWeatherData = {
    city: fullWeatherData.name,
    currentTemp: fullWeatherData.main.temp,
    currentWeather: fullWeatherData.weather[0].main,
  };
  return importantWeatherData;
}
