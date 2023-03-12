
const roundToDecimal = function (number){
  return (Math.round(number * 10)) / 10;
}

const convertToCelsius = function(fahr) {
  return roundToDecimal(( fahr - 32) * 5/9);
};

const convertToFahrenheit = function(celc) {
  return roundToDecimal(celc * 9/5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
