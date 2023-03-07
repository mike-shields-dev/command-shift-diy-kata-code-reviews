const numberToReversedDigits = (number) => {
    return number.toString().split('').reverse().map(num => parseInt(num));
}
module.exports = numberToReversedDigits;
