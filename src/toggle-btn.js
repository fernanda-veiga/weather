function getUnitType() {
  const toggleCheckbox = document.querySelector(".toggle-checkbox");
  if (toggleCheckbox.checked) {
    return "imperial";
  } else {
    return "metric";
  }
}

function getUnitNames() {
  const unitType = getUnitType();
  if (unitType === "imperial") {
    return ["°F", "mph"];
  } else {
    return ["°C", "m/s"];
  }
}

export { getUnitType, getUnitNames };
