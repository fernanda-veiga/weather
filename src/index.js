import "./css/style.css";
import { generateWeatherPage } from "./dom";
import { addListenerToSearchButton } from "./search-box";
import { storeLocationWeatherData, storeInfoWeatherData } from "./store-data";

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

export { fetchWeatherData };
