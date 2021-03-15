import sunnyIcon from "./icons/sunny.svg";

const weatherIcon = document.querySelector(".location-weather-icon");
const tempContainer = document.querySelector(".location-temperature");
const cityContainer = document.querySelector(".location-name");
const weatherContainer = document.querySelector(".location-weather");

function generateWeatherPage(importantWeatherData) {
  generateLocationSection(importantWeatherData);
  //generateInfoSection(importantWeatherData);
}

function generateLocationSection(importantWeatherData) {
  weatherIcon.src = sunnyIcon;
  tempContainer.textContent = `${importantWeatherData.currentTemp}°C`;
  cityContainer = `${importantWeatherData.city}`;
  weatherContainer = `${importantWeatherData.currentWeather}`;
}

/*function generateInfoSection(importantWeatherData) {
  const body = document.querySelector("body");
  const infoSection = document.createElement("section");
  infoSection.classList.add("info");
  body.appendChild(infoSection);
}*/

export { generateWeatherPage };
