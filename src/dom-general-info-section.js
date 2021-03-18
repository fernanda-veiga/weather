import svgFeelsLike from "./icons/aplication/feels-like.svg";
import svgSunrise from "./icons/aplication/sunrise.svg";
import svgSunset from "./icons/aplication/sunset.svg";
import svgWind from "./icons/aplication/wind-speed.svg";
import svgHumidity from "./icons/aplication/humidity.svg";
import { getUnitNames } from "./toggle-btn";

function generateGeneralInfoSection(locationWeatherData, infoWeatherData) {
  //Remove loader before generating the section
  const contentContainer = document.querySelector(".info-general-content");
  contentContainer.innerHTML = "";

  generateGeneralInfoElements();
  generateGeneralInfoValues(infoWeatherData);
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
