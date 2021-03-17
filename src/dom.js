import {
  generateWeatherIcon,
  generateWeatherBackground,
} from "./weather-icons";
import svgSunrise from "./icons/aplication/sunrise.svg";
import svgSunset from "./icons/aplication/sunset.svg";
import svgWind from "./icons/aplication/wind-speed.svg";
import svgHumidity from "./icons/aplication/humidity.svg";
import { getUnitNames } from "./toggle-btn";

function generateWeatherPage(locationWeatherData, infoWeatherData) {
  generateLocationSection(locationWeatherData);
  generateInfoSection(locationWeatherData, infoWeatherData);
}

function generateLocationSection(locationWeatherData) {
  const locationSection = document.querySelector(".location");
  const weatherIcon = document.querySelector(".location-weather-icon");
  const tempContainer = document.querySelector(".location-weather-temp");
  const placeContainer = document.querySelector(".location-weather-place");
  const weatherContainer = document.querySelector(".location-weather-type");

  //Get current unit
  const tempUnit = getUnitNames()[0];

  locationSection.style.background = generateWeatherBackground(
    locationWeatherData.currentWeather
  );
  weatherIcon.src = generateWeatherIcon(locationWeatherData.currentWeather);
  tempContainer.textContent = `${locationWeatherData.currentTemp}${tempUnit}`;
  placeContainer.textContent = `${locationWeatherData.city}, ${locationWeatherData.country}`;
  weatherContainer.textContent = `${locationWeatherData.currentWeather}`;
}

function generateInfoSection(locationWeatherData, infoWeatherData) {
  generateGeneralInfoSection(locationWeatherData, infoWeatherData);
  generateForecastInfoSection(infoWeatherData);
}

function generateGeneralInfoSection(locationWeatherData, infoWeatherData) {
  const sunriseIcon = document.querySelector(".info-sunrise-icon");
  const sunriseValue = document.querySelector(".info-sunrise-value");
  const sunsetIcon = document.querySelector(".info-sunset-icon");
  const sunsetValue = document.querySelector(".info-sunset-value");
  const windIcon = document.querySelector(".info-wind-icon");
  const windValue = document.querySelector(".info-wind-value");
  const humidityIcon = document.querySelector(".info-humidity-icon");
  const humidityValue = document.querySelector(".info-humidity-value");

  //Get current unit
  const speedUnit = getUnitNames()[1];

  //Set icons
  sunriseIcon.src = svgSunrise;
  sunsetIcon.src = svgSunset;
  windIcon.src = svgWind;
  humidityIcon.src = svgHumidity;

  //Set values
  sunriseValue.textContent = `${infoWeatherData.sunrise}`;
  sunsetValue.textContent = `${infoWeatherData.sunset}`;
  windValue.textContent = `${infoWeatherData.windSpeed} ${speedUnit}`;
  humidityValue.textContent = `${infoWeatherData.humidity}%`;

  //Toggle button
  const toggleButton = document.querySelector(".toggle-slider");
  toggleButton.style.background = generateWeatherBackground(
    locationWeatherData.currentWeather
  );
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

export { generateWeatherPage };
