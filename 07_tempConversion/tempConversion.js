const convertToCelsius = function(fahrenheitTemp) {
  //assigns fahrenheitTemp to the variable x
  let x = fahrenheitTemp;
  //assigns conversion of x to celcius to the varibale convertedCelTemp
  let convertedCelTemp = Math.round((x - 32) * (5 / 9) * 10) / 10;
  //returns the convertedCelTemp number that was calculated
  return convertedCelTemp;
};



const convertToFahrenheit = function(celciusTemp) {
  let x = celciusTemp;

  let convertedFahrTemp = Math.round(((x * (9 / 5) + 32) * 10)) / 10;

  return convertedFahrTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
