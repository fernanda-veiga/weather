function getUnitType() {
  const toggleCheckbox = document.querySelector(".toggle-checkbox");
  if (toggleCheckbox.checked) {
    return "imperial";
  } else {
    return "metric";
  }
}

export { getUnitType };
