import errorIcon from "./icons/aplication/error.svg";

function displayAllErrorsOnScreen() {
  displayError(".location-weather");
  displayError(".info-general-content");
  displayError(".info-forecast-content");
}

function displayError(contentContainerClass) {
  //Remove loader before displaying the error
  const contentContainer = document.querySelector(contentContainerClass);
  contentContainer.innerHTML = "";

  //Generate error and container
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("api-error-container");
  let error;

  if (contentContainerClass === ".location-weather") {
    error = document.createElement("p");
    error.classList.add("api-error-p");
    error.textContent = "Could not find location";
  } else {
    error = document.createElement("img");
    error.classList.add("api-error-img");
    error.src = errorIcon;
  }

  //Append to container
  errorContainer.appendChild(error);
  contentContainer.appendChild(errorContainer);
}

export { displayAllErrorsOnScreen };
