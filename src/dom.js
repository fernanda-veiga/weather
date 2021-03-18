import { generateLocationSection } from "./dom-location-section";
import { generateGeneralInfoSection } from "./dom-general-info-section";
import { generateForecastInfoSection } from "./dom-forecast-section";
import { generateWeatherColors } from "./weather-icons";

function generateAllLoaders() {
  generateLoader(".location-weather");
  generateLoader(".info-general-content");
  generateLoader(".info-forecast-content");
}

function generateLoader(contentContainerClass) {
  //Remove all existing elements before generating the loader
  const contentContainer = document.querySelector(contentContainerClass);
  contentContainer.innerHTML = "";

  //Generate loader and container
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("loader-container");
  const loader = document.createElement("div");
  loader.classList.add("loader");

  //Append to container
  loaderContainer.appendChild(loader);
  contentContainer.appendChild(loaderContainer);
}

function generateWeatherPage(locationWeatherData, infoWeatherData) {
  generateLocationSection(locationWeatherData);
  generateInfoSection(locationWeatherData, infoWeatherData);
  changeColorByWeather(locationWeatherData);
}

function generateInfoSection(locationWeatherData, infoWeatherData) {
  generateGeneralInfoSection(locationWeatherData, infoWeatherData);
  generateForecastInfoSection(infoWeatherData);
}

function changeColorByWeather(locationWeatherData) {
  //Location section background
  const locationSection = document.querySelector(".location");
  locationSection.style.background = generateWeatherColors(
    locationWeatherData.currentWeather,
    locationWeatherData.timeOfDay
  )[0];

  //Toggle button
  const toggleButton = document.querySelector(".toggle-slider");
  toggleButton.style.background = generateWeatherColors(
    locationWeatherData.currentWeather,
    locationWeatherData.timeOfDay
  )[1];

  //Info section icons
  const infoSection = document.querySelector(".info");
  const allIcons = infoSection.querySelectorAll("img");

  allIcons.forEach((icon) => {
    icon.style.filter = generateWeatherColors(
      locationWeatherData.currentWeather,
      locationWeatherData.timeOfDay
    )[2];
  });
}

export { generateWeatherPage, generateAllLoaders };
