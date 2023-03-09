const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });
  
  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });
  
  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(30)).toBe('FizzBuzz')
    expect(fizzBuzz(60)).toBe('FizzBuzz')
  });
  
  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(2)).toBe(2)
    expect(fizzBuzz(13)).toBe(13)
    expect(fizzBuzz(23)).toBe(23)
  });
});
