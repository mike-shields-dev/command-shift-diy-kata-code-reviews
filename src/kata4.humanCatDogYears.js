const humanCatDogYears = (number) => {
  const firstTwoYears = 15 + 9;
  const animalYears = function(catOrDog) {
    return catOrDog * (number - 2) + firstTwoYears;
  }
  const catYears = animalYears(4);
  const dogYears = animalYears(5);
  return Array.of(number, catYears, dogYears);
};

module.exports = humanCatDogYears;
