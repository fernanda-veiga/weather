import { getUnitNames } from "./toggle-btn";
import {
  generateWeatherIcon,
  generateWeatherBackground,
} from "./weather-icons";

function generateLocationSection(locationWeatherData) {
  generateLocationSectionElements();
  changeCurrentBackground();
  generateLocationSectionValues(locationWeatherData);
}

function generateLocationSectionElements() {
  //Create elements
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("location-weather-icon-container");
  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("location-weather-icon");
  iconContainer.appendChild(weatherIcon);

  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.classList.add("location-weather-temp-container");
  const tempContainer = document.createElement("p");
  tempContainer.classList.add("location-weather-temp");
  const weatherContainer = document.createElement("p");
  weatherContainer.classList.add("location-weather-type");
  weatherInfoContainer.appendChild(tempContainer);
  weatherInfoContainer.appendChild(weatherContainer);

  const locationInfoContainer = document.createElement("div");
  locationInfoContainer.classList.add("location-weather-info-container");
  const placeContainer = document.createElement("p");
  placeContainer.classList.add("location-weather-place");
  locationInfoContainer.appendChild(placeContainer);

  //Append elements to container
  const contentContainer = document.querySelector(".location-weather");
  contentContainer.appendChild(iconContainer);
  contentContainer.appendChild(weatherInfoContainer);
  contentContainer.appendChild(locationInfoContainer);
}

function changeCurrentBackground(locationWeatherData) {
  const locationSection = document.querySelector(".location");
  locationSection.style.background = generateWeatherBackground(
    locationWeatherData.currentWeather
  );
}

function generateLocationSectionValues(locationWeatherData) {
  //Get current unit
  const tempUnit = getUnitNames()[0];

  //Get elements
  const weatherIcon = document.querySelector(".location-weather-icon");
  const tempContainer = document.querySelector(".location-weather-temp");
  const weatherContainer = document.querySelector(".location-weather-type");
  const placeContainer = document.querySelector(".location-weather-place");

  //Generate values
  weatherIcon.src = generateWeatherIcon(locationWeatherData.currentWeather);
  tempContainer.textContent = `${locationWeatherData.currentTemp}${tempUnit}`;
  weatherContainer.textContent = `${locationWeatherData.currentWeather}`;
  placeContainer.textContent = `${locationWeatherData.city}, ${locationWeatherData.country}`;
}

export { generateLocationSection };
