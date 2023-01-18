const convertToCelsius = function(a) {
//  x °F ≘ (x − 32) × 5/9 °C
  const b = (a - 32) * 5/9;
  return Math.round( b * 10) / 10;
};

const convertToFahrenheit = function(a) {
//    x °C ≘ (x × 9/5 + 32) °F
  const b = (a * 9/5) + 32;
  return Math.round( b * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
