const fizzBuzz = (number) => {

const divisibleByThree = (number % 3) === 0
const divisibleByFive = (number % 5) === 0

if (divisibleByThree && divisibleByFive){
    return 'FizzBuzz';
}

if (divisibleByFive){
    return 'Buzz';
}

if (divisibleByThree){
    return 'Fizz';
}

    return number;
};
 
module.exports = fizzBuzz;
