import { generateWeatherPage, generateAllLoaders } from "./dom";
import { getUnitType } from "./toggle-btn";
import { storeLocationWeatherData, storeInfoWeatherData } from "./store-data";
import { displayAllErrors } from "./dom-error";

async function fetchWeatherData(location) {
  try {
    const API_KEY = "d3bb1e3bed4381c130b23c941a594404";
    const unit = getUnitType();
    generateAllLoaders();

    //Fetch data
    const fetchedCurrentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=${unit}`,
      { mode: "cors" }
    );
    const fetchedForecastWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=${unit}`,
      { mode: "cors" }
    );

    //Get json
    const fullWeatherData = await fetchedCurrentWeatherData.json();
    const fullForecastData = await fetchedForecastWeatherData.json();

    //Store data
    const locationWeatherData = storeLocationWeatherData(fullWeatherData);
    const infoWeatherData = storeInfoWeatherData(
      fullWeatherData,
      fullForecastData
    );

    //Generate the page
    generateWeatherPage(locationWeatherData, infoWeatherData);
  } catch (error) {
    displayAllErrors();
  }
}

export { fetchWeatherData };
