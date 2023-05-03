const palindromes = function (str) {
  const string = str.toLowerCase().replace(/[^a-z]/g, "");
  return [...string].reverse().join("") === string;
};

// Do not edit below this line
module.exports = palindromes;
