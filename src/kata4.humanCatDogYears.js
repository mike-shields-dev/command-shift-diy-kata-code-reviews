const humanCatDogYears = (number) => {
    // human age input
    const humanYears = number;

    // First and second year for cat and dog;
    const catDogFirstSecondYear = 15 + 9;

    // Cat years after first 2 years;
    const catOtherYears = (humanYears - 2) * 4;

    // Dog years after first 2 years;
    const dogOtherYears = (humanYears - 2) * 5;

    // Total dog years converted from humanYears input
    let totalCatYears;
    let totalDogYears;

    if(humanYears === 0){
        totalCatYears = 0;
        totalDogYears = 0;
        return [number,totalCatYears,totalDogYears];
    } else if(humanYears < 0) {
        return ['Please enter a positive number'];
    } else {
        totalCatYears = catDogFirstSecondYear + catOtherYears;
        totalDogYears = catDogFirstSecondYear + dogOtherYears;
        return [number,totalCatYears,totalDogYears]
    }
};

module.exports = humanCatDogYears;

