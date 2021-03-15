import { fetchWeatherData } from "./index";

const locationSearchInput = document.querySelector(".location-search-input");
const locationSearchButton = document.querySelector(".location-search-button");

function addListenerToSearchButton() {
  locationSearchButton.addEventListener("click", () => {
    console.log(locationSearchInput.value);
    fetchWeatherData(locationSearchInput.value);
  });
}

export { addListenerToSearchButton };
