const fizzBuzz = (number) => {
  if (number % 3 === 0) {
    return "Fizz";
  }
  return "Buzz";
};

module.exports = fizzBuzz;
