import "./css/style.css";
import "./css/toggle-btn.css";
import { fetchWeatherData } from "./fetch-data";
import { getCurrentLocation } from "./search-box";

let currentLocation = "London";
fetchWeatherData(currentLocation);

//Add listener to search box
function addListenerToSearchButton() {
  const locationSearchButton = document.querySelector(
    ".location-search-button"
  );
  locationSearchButton.addEventListener("click", () => {
    currentLocation = getCurrentLocation();
    fetchWeatherData(currentLocation);
  });
}
addListenerToSearchButton();

//Add listener to toggle
function addListenerToToggle() {
  const toggleCheckbox = document.querySelector(".toggle-checkbox");
  toggleCheckbox.addEventListener("change", () => {
    fetchWeatherData(currentLocation);
  });
}
addListenerToToggle();
