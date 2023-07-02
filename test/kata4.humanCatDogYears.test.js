const { humanCatDogYears } = require("../src");
// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  test("returns humanYears, catYears, dogYears", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});
