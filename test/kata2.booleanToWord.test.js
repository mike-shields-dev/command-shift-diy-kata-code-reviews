const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  test("returns the boolean word passed", () => {
    expect(booleanToWord("true")).toBe("Yes");
    expect(booleanToWord("false")).toBe("No");
  });
});
