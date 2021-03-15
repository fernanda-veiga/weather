function generateWeatherPage(importantWeatherData) {
  generateLocationSection(importantWeatherData);
  generateInfoSection(importantWeatherData);
}

function generateLocationSection(importantWeatherData) {
  const body = document.querySelector("body");
  const locationSection = document.createElement("section");
  locationSection.classList.add("location");
  const locationInfoContainer = document.createElement("div");
  locationInfoContainer.textContent = `${importantWeatherData.city}
  ${importantWeatherData.currentTemp}
  ${importantWeatherData.currentWeather}`;
  //Append children
  locationSection.appendChild(locationInfoContainer);
  body.appendChild(locationSection);
}

function generateInfoSection(importantWeatherData) {
  const body = document.querySelector("body");
  const infoSection = document.createElement("section");
  infoSection.classList.add("info");
  body.appendChild(infoSection);
}

export { generateWeatherPage };
