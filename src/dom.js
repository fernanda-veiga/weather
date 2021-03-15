import { generateWeatherIcon } from "./icon";

const weatherIcon = document.querySelector(".location-weather-icon");
const tempContainer = document.querySelector(".location-weather-temp");
const placeContainer = document.querySelector(".location-weather-place");
const weatherContainer = document.querySelector(".location-weather-type");

function generateWeatherPage(locationWeatherData) {
  generateLocationSection(locationWeatherData);
  //generateInfoSection(importantWeatherData);
}

function generateLocationSection(locationWeatherData) {
  weatherIcon.src = generateWeatherIcon(locationWeatherData.currentWeather);
  tempContainer.textContent = `${locationWeatherData.currentTemp}°C`;
  placeContainer.textContent = `${locationWeatherData.city}, ${locationWeatherData.country}`;
  weatherContainer.textContent = `${locationWeatherData.currentWeather}`;
}

/*function generateInfoSection(importantWeatherData) {
  const body = document.querySelector("body");
  const infoSection = document.createElement("section");
  infoSection.classList.add("info");
  body.appendChild(infoSection);
}*/

export { generateWeatherPage };
