const humanCatDogYears = (number) => {
    let catAge = 0
    let dogAge = 0;

 if(number === 1){
   catAge = 15;
   dogAge = 15;
 } else if (number === 2){
    catAge = 15 + 9;
    dogAge = 15 + 9;
 } else {
    catAge = 15 + 9 + (4 * (number - 2));
    dogAge = 15 + 9 + (5 * (number - 2));
 }

 return [number, catAge, dogAge];

};


module.exports = humanCatDogYears;
