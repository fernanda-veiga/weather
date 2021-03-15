function transformKelvinTemp(kelvinTemp, newTempUnit) {
  celciusTemp = kelvinTemp - 273.15;

  if ((newTempUnit = "celcius")) {
    return celciusTemp;
  } else {
    fahrenheitTemp = celciusToFahrenheit(celciusTemp);
    return fahrenheitTemp;
  }
}

function celciusToFahrenheit(celciusTemp) {
  return celciusTemp * (9 / 5) + 32;
}

export { transformKelvinTemp };
