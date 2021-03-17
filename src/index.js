import "./css/style.css";
import "./css/toggle-btn.css";
import "./css/loader.css";
import { fetchWeatherData } from "./fetch-data";
import { getCurrentLocation } from "./search-box";
import { showInputError, eraseInputError } from "./input-error";

let currentLocation = "London";
fetchWeatherData(currentLocation);

//Add listener to search box
function addListenerToSearchButton() {
  const locationSearchButton = document.querySelector(
    ".location-search-button"
  );
  const locationSearchInput = document.querySelector(".location-search-input");

  locationSearchButton.addEventListener("click", () => {
    //Throw error if the text is invalid
    console.log(locationSearchInput.validity.valid);
    if (locationSearchInput.validity.valid) {
      eraseInputError();
    } else {
      showInputError(locationSearchInput);
      return;
    }

    //Get location and data
    currentLocation = getCurrentLocation();
    fetchWeatherData(currentLocation);
  });
}
addListenerToSearchButton();

//Add listener to toggle
function addListenerToToggle() {
  const toggleCheckbox = document.querySelector(".toggle-checkbox");
  const unitCelcius = document.querySelector(".celcius");
  const unitFahrenheit = document.querySelector(".fahrenheit");
  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      unitCelcius.style.color = "white";
      unitFahrenheit.style.color = "gray";
    } else {
      unitCelcius.style.color = "gray";
      unitFahrenheit.style.color = "white";
    }
    fetchWeatherData(currentLocation);
  });
}
addListenerToToggle();
