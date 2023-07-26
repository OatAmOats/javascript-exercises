const convertToFahrenheit = function(celc) {
  let fah = (celc*(9/5)) + 32;
  fah = Math.round(fah * 10) / 10
  return(fah);
};

const convertToCelsius = function(fah) {
  let cel = (fah-32) * 5 / 9;
  cel = Math.round(cel* 10)/10
  return(cel);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
