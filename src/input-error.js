function showInputError(searchInput) {
  const errorDiv = document.querySelector(".input-error-div");
  const error = document.querySelector(".input-error");

  errorDiv.style.opacity = "1";
  errorDiv.style.transform = "translateY(0)";

  if (searchInput.validity.typeMismatch) {
    error.textContent = `The location name is not valid.`;
  } else if (searchInput.validity.tooShort) {
    error.textContent = `The location name should be at least ${searchInput.minLength} characters long. You have entered ${searchInput.value.length}.`;
  } else if (searchInput.validity.tooLong) {
    error.textContent = `The location name should be less than ${searchInput.maxLength} characters. You have entered ${searchInput.value.length}.`;
  } else if (searchInput.validity.patternMismatch) {
    error.textContent = `The location name should contain only letters and spaces. You can search by city name or city name and country code separated by a comma. Use ISO 3166 country codes`;
  }
}

function eraseInputError() {
  const errorDiv = document.querySelector(".input-error-div");
  errorDiv.style.opacity = "0";
  errorDiv.style.transform = "translateY(-10px)";
}

export { showInputError, eraseInputError };
