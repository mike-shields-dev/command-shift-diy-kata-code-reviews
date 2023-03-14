const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "John" }, { name: "Judith" }, { name: "Antoinette" }])
    ).toEqual("John, Judith & Antoinette");
    expect(
      joinNames([
        { name: "John" },
        { name: "Judith" },
        { name: "Antoinette" },
        { name: "Austin" },
        { name: "Brian" },
      ])
    ).toEqual("John, Judith, Antoinette, Austin & Brian");
  });
});
