import sunnyIcon from "./icons/sunny.svg";

const weatherIcon = document.querySelector(".location-weather-icon");
const tempContainer = document.querySelector(".location-weather-temp");
const placeContainer = document.querySelector(".location-weather-place");
const weatherContainer = document.querySelector(".location-weather-type");

function generateWeatherPage(importantWeatherData) {
  generateLocationSection(importantWeatherData);
  //generateInfoSection(importantWeatherData);
}

function generateLocationSection(importantWeatherData) {
  weatherIcon.src = sunnyIcon;
  tempContainer.textContent = `${importantWeatherData.currentTemp}°C`;
  placeContainer.textContent = `${importantWeatherData.city}, ${importantWeatherData.country}`;
  weatherContainer.textContent = `${importantWeatherData.currentWeather}`;
}

/*function generateInfoSection(importantWeatherData) {
  const body = document.querySelector("body");
  const infoSection = document.createElement("section");
  infoSection.classList.add("info");
  body.appendChild(infoSection);
}*/

export { generateWeatherPage };
