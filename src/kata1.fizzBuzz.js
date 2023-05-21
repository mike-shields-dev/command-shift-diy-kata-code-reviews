const fizzBuzz = (number) => {
    if (number % 3){
        return "Fizz"
    }
    if(number % 5){
        return "Buzz"
    }
    if (number % 3 && number % 5){
        return "FizzBuzz"
    }
    return number;
};

module.exports = fizzBuzz;
