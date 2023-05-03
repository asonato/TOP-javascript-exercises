const getTheTitles = function (books) {
  const array = [];
  for (item of books) {
    const { title } = item;
    array.push(title);
  }
  return array;
};

// Do not edit below this line
module.exports = getTheTitles;
