const numberToReversedDigits = (number) => {
    let str = String(number);
    let arr = Array.from(str).reverse();
    return arr.map( str => parseInt(str) );
};

module.exports = numberToReversedDigits;
