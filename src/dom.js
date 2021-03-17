import {
  generateWeatherIcon,
  generateWeatherBackground,
} from "./weather-icons";
import svgSunrise from "./icons/aplication/sunrise.svg";
import svgSunset from "./icons/aplication/sunset.svg";
import svgWind from "./icons/aplication/wind-speed.svg";
import svgHumidity from "./icons/aplication/humidity.svg";
import { getUnitNames } from "./toggle-btn";

import { generateLocationSection } from "./dom-location-section";
import { generateGeneralInfoSection } from "./dom-general-info-section";
import { generateForecastInfoSection } from "./dom-forecast-section";

function generateAllLoaders() {
  generateLoader(".location-weather");
  generateLoader(".info-general-content");
  generateLoader(".info-forecast-content");
}

function generateLoader(contentContainerClass) {
  //Remove all existing elements before generating the loader
  const contentContainer = document.querySelector(contentContainerClass);
  console.log(contentContainer);
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
}

function generateInfoSection(locationWeatherData, infoWeatherData) {
  generateGeneralInfoSection(locationWeatherData, infoWeatherData);
  generateForecastInfoSection(infoWeatherData);
}

export { generateWeatherPage, generateAllLoaders };
