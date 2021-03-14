fetchWeatherData("Sydney");

async function fetchWeatherData(location) {
  try {
    const API_KEY = "d3bb1e3bed4381c130b23c941a594404";
    const fetchedData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
      { mode: "cors" }
    );
    const weatherData = await fetchedData.json();
    console.log(weatherData);
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}
