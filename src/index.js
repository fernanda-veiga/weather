import "./css/style.css";
import { generateWeatherPage } from "./dom";
import { addListenerToSearchButton } from "./search-box";

fetchWeatherData("London");
addListenerToSearchButton();

async function fetchWeatherData(location) {
  try {
    const API_KEY = "d3bb1e3bed4381c130b23c941a594404";
    const fetchedCurrentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`,
      { mode: "cors" }
    );

    const fullWeatherData = await fetchedCurrentWeatherData.json();
    console.log(await fullWeatherData);
    const locationWeatherData = await storeLocationWeatherData(fullWeatherData);
    console.log(await locationWeatherData);
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
    currentWeather: fullWeatherData.weather[0].main,
  };
  return locationWeatherData;
}

export { fetchWeatherData };
