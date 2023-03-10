const numberToReversedDigits = (number) => {
  const numberToArray = Array.from(String(number), Number);
  return numberToArray.reverse();
};

module.exports = numberToReversedDigits;
