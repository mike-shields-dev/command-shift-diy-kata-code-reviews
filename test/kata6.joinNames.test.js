const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'John'}, {name: 'Judith'}, {name: 'Antoinette'}]).toEqual("John, Judith /& Antoinette");
  });
});
