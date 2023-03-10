const fizzBuzz = (number) => {
  const isDivisableBy3 = number % 3 === 0;
  const isDivisibleBy5 = number % 5 === 0;

  if (isDivisableBy3 && isDivisibleBy5) {
    return "FizzBuzz";
  }
  if (isDivisableBy3) {
    return "Fizz";
  }
  if (isDivisibleBy5) {
    return "Buzz";
  }

  return number;
};

module.exports = fizzBuzz;
