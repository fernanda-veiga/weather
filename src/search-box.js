function getCurrentLocation() {
  const locationSearchInput = document.querySelector(".location-search-input");
  return locationSearchInput.value;
}

export { getCurrentLocation };
