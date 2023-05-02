const convertToCelsius = function (f) {
  if (isNaN(f)) {
    return "ERROR";
  }
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (c) {
  if (isNaN(c)) {
    return "ERROR";
  }
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
