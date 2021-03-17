import svgSunrise from "./icons/aplication/sunrise.svg";
import svgSunset from "./icons/aplication/sunset.svg";
import svgWind from "./icons/aplication/wind-speed.svg";
import svgHumidity from "./icons/aplication/humidity.svg";
import { getUnitNames } from "./toggle-btn";
import { generateWeatherBackground } from "./weather-icons";

function generateGeneralInfoSection(locationWeatherData, infoWeatherData) {
  //Remove loader before generating the section
  const contentContainer = document.querySelector(".info-general-content");
  contentContainer.innerHTML = "";

  generateGeneralInfoElements();
  generateGeneralInfoValues(infoWeatherData);

  //Toggle button
  /*const toggleButton = document.querySelector(".toggle-slider");
  toggleButton.style.background = generateWeatherBackground(
    locationWeatherData.currentWeather
  );*/
}

function generateGeneralInfoElements() {
  //Create elements
  const sunriseContainer = document.createElement("div");
  sunriseContainer.classList.add("info-sunrise-container");
  const sunriseIcon = document.createElement("img");
  sunriseIcon.classList.add("info-sunrise-icon");
  const sunriseText = document.createElement("p");
  sunriseText.classList.add("info-sunrise-value");
  sunriseContainer.appendChild(sunriseIcon);
  sunriseContainer.appendChild(sunriseText);

  const sunsetContainer = document.createElement("div");
  sunsetContainer.classList.add("info-sunset-container");
  const sunsetIcon = document.createElement("img");
  sunsetIcon.classList.add("info-sunset-icon");
  const sunsetText = document.createElement("p");
  sunsetText.classList.add("info-sunset-value");
  sunsetContainer.appendChild(sunsetIcon);
  sunsetContainer.appendChild(sunsetText);

  const windContainer = document.createElement("div");
  windContainer.classList.add("info-wind-container");
  const windIcon = document.createElement("img");
  windIcon.classList.add("info-wind-icon");
  const windText = document.createElement("p");
  windText.classList.add("info-wind-value");
  windContainer.appendChild(windIcon);
  windContainer.appendChild(windText);

  const humidityContainer = document.createElement("div");
  humidityContainer.classList.add("info-humidity-container");
  const humidityIcon = document.createElement("img");
  humidityIcon.classList.add("info-humidity-icon");
  const humidityText = document.createElement("p");
  humidityText.classList.add("info-humidity-value");
  humidityContainer.appendChild(humidityIcon);
  humidityContainer.appendChild(humidityText);

  //Append elements to container
  const contentContainer = document.querySelector(".info-general-content");
  contentContainer.appendChild(sunriseContainer);
  contentContainer.appendChild(sunsetContainer);
  contentContainer.appendChild(windContainer);
  contentContainer.appendChild(humidityContainer);
}

function generateGeneralInfoValues(infoWeatherData) {
  //Get current unit
  const speedUnit = getUnitNames()[1];

  //Get elements
  const contentContainer = document.querySelector(".info-general-content");
  const allIcon = contentContainer.querySelectorAll("img");
  const allText = contentContainer.querySelectorAll("p");

  //Set icons
  allIcon[0].src = svgSunrise;
  allIcon[1].src = svgSunset;
  allIcon[2].src = svgWind;
  allIcon[3].src = svgHumidity;

  //Set values
  allText[0].textContent = `${infoWeatherData.sunrise}`;
  allText[1].textContent = `${infoWeatherData.sunset}`;
  allText[2].textContent = `${infoWeatherData.windSpeed} ${speedUnit}`;
  allText[3].textContent = `${infoWeatherData.humidity}%`;
}

export { generateGeneralInfoSection };
