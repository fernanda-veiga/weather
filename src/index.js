import "./style.css";

let currentWeatherData;
//let forecastWeatherData;
fetchWeatherData("Sydney");

async function fetchWeatherData(location) {
  try {
    const API_KEY = "d3bb1e3bed4381c130b23c941a594404";
    const fetchedCurrentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
      { mode: "cors" }
    );
    currentWeatherData = await fetchedCurrentWeatherData.json();

    /*const fetchedForecastWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`,
      { mode: "cors" }
    );
    forecastWeatherData = await fetchedForecastWeatherData.json();*/
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}

console.log(currentWeatherData);
//console.log(forecastWeatherData);
