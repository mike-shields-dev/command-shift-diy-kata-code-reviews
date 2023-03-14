const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when passed true and returns No when passed false", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
