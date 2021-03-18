import svgFeelsLike from "./icons/aplication/feels-like.svg";
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
  for (let i = 1; i <= 5; i++) {
    //Create elements
    const container = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");
    const text = document.createElement("p");
    container.appendChild(icon);
    container.appendChild(title);
    container.appendChild(text);

    //Append elements to container
    const contentContainer = document.querySelector(".info-general-content");
    contentContainer.appendChild(container);
  }

  /*const feelsLikeContainer = document.createElement("div");
  const feelsLikeIcon = document.createElement("img");
  const feelsLikeText = document.createElement("p");
  feelsLikeContainer.appendChild(feelsLikeIcon);
  feelsLikeContainer.appendChild(feelsLikeText);

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
  contentContainer.appendChild(feelsLikeContainer);
  contentContainer.appendChild(sunriseContainer);
  contentContainer.appendChild(sunsetContainer);
  contentContainer.appendChild(windContainer);
  contentContainer.appendChild(humidityContainer);*/
}

function generateGeneralInfoValues(infoWeatherData) {
  //Get current unit
  const tempUnit = getUnitNames()[0];
  const speedUnit = getUnitNames()[1];

  //Get elements
  const contentContainer = document.querySelector(".info-general-content");
  const allIcon = contentContainer.querySelectorAll("img");
  const allTitle = contentContainer.querySelectorAll("h5");
  const allText = contentContainer.querySelectorAll("p");

  //Set icons
  allIcon[0].src = svgFeelsLike;
  allIcon[1].src = svgSunrise;
  allIcon[2].src = svgSunset;
  allIcon[3].src = svgWind;
  allIcon[4].src = svgHumidity;

  //Set titles
  allTitle[0].textContent = "FEELS LIKE";
  allTitle[1].textContent = "SUNRISE";
  allTitle[2].textContent = "SUNSET";
  allTitle[3].textContent = "WIND SPEED";
  allTitle[4].textContent = "HUMIDITY";

  //Set values
  allText[0].textContent = `${infoWeatherData.feelsLike}${tempUnit}`;
  allText[1].textContent = `${infoWeatherData.sunrise}`;
  allText[2].textContent = `${infoWeatherData.sunset}`;
  allText[3].textContent = `${infoWeatherData.windSpeed} ${speedUnit}`;
  allText[4].textContent = `${infoWeatherData.humidity}%`;
}

export { generateGeneralInfoSection };
