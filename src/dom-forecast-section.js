import { generateWeatherIcon } from "./weather-icons";
import { getUnitNames } from "./toggle-btn";

function generateForecastInfoSection(infoWeatherData) {
  //Remove loader before generating the section
  const contentContainer = document.querySelector(".info-forecast-content");
  contentContainer.innerHTML = "";

  generateForecastSectionElements();
  generateForecastSectionValues(infoWeatherData);
}

function generateForecastSectionElements() {
  for (let i = 1; i <= 5; i++) {
    //Create elements
    const dayContainer = document.createElement("div");
    dayContainer.classList.add(`info-day${i}-container`);
    const titleContainer = document.createElement("h5");
    titleContainer.classList.add(`info-day${i}-title`);
    const iconContainer = document.createElement("img");
    iconContainer.classList.add(`info-day${i}-icon`);
    const valueContainer = document.createElement("p");
    valueContainer.classList.add(`info-day${i}-value`);
    dayContainer.appendChild(titleContainer);
    dayContainer.appendChild(iconContainer);
    dayContainer.appendChild(valueContainer);

    //Append elements to container
    const contentContainer = document.querySelector(".info-forecast-content");
    contentContainer.appendChild(dayContainer);
  }
}

function generateForecastSectionValues(infoWeatherData) {
  //Get current unit
  const tempUnit = getUnitNames()[0];

  //Get elements
  for (let i = 1; i <= 5; i++) {
    const dayNumber = `day${i}`;

    //Get elements
    const titleContainer = document.querySelector(`.info-${dayNumber}-title`);
    const valueContainer = document.querySelector(`.info-${dayNumber}-value`);
    const iconContainer = document.querySelector(`.info-${dayNumber}-icon`);

    //Generate values
    titleContainer.textContent = `${infoWeatherData.forecast[dayNumber].day}`.toUpperCase();
    valueContainer.textContent = `${infoWeatherData.forecast[dayNumber].min}/${infoWeatherData.forecast[dayNumber].max}${tempUnit}`;
    iconContainer.src = generateWeatherIcon(
      `${infoWeatherData.forecast[dayNumber].weather}`
    );
  }
}

export { generateForecastInfoSection };
