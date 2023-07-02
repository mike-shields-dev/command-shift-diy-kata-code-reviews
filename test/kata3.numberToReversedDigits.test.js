const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    const array = [1, 2, 3, 4, 5];
    expect(numberToReversedDigits(array)).toEqual([5, 4, 3, 2, 1]);
  });
});
