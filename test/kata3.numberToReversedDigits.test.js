const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(68188)).toEqual([8, 8, 1, 8, 6]);
    expect(numberToReversedDigits(54321)).toEqual([1, 2, 3 , 4 ,5]);
  });
});