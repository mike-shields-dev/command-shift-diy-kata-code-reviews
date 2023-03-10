const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 > 0) {
    return "Fizz";
  }
  return "Buzz";
};

module.exports = fizzBuzz;
