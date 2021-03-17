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

function generateAllLoaders() {
  generateLoader(".location-weather");
  generateLoader(".info-general-content");
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
  //Remove all existing elements before generating the loader
  const contentContainer = document.querySelector(".location-weather");
  contentContainer.innerHTML = "";

  generateLocationSection(locationWeatherData);
  generateInfoSection(locationWeatherData, infoWeatherData);
}

function generateInfoSection(locationWeatherData, infoWeatherData) {
  generateGeneralInfoSection(locationWeatherData, infoWeatherData);
  generateForecastInfoSection(infoWeatherData);
}

function generateForecastInfoSection(infoWeatherData) {
  //Get current unit
  const tempUnit = getUnitNames()[0];

  for (let i = 1; i <= 5; i++) {
    const dayNumber = `day${i}`;

    const titleContainer = document.querySelector(`.info-${dayNumber}-title`);
    const valueContainer = document.querySelector(`.info-${dayNumber}-value`);
    const iconContainer = document.querySelector(`.info-${dayNumber}-icon`);

    titleContainer.textContent = `${infoWeatherData.forecast[dayNumber].day}`.toUpperCase();
    valueContainer.textContent = `${infoWeatherData.forecast[dayNumber].min}/${infoWeatherData.forecast[dayNumber].max}${tempUnit}`;
    iconContainer.src = generateWeatherIcon(
      `${infoWeatherData.forecast[dayNumber].weather}`
    );
  }
}

export { generateWeatherPage, generateAllLoaders };
