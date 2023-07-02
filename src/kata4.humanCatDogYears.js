const humanCatDogYears = (number) => {
  let catYears;
  let dogYears;
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (number === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + 4 * (number - 2);
    dogYears = 15 + 9 + 5 * (number - 2);
  }
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
