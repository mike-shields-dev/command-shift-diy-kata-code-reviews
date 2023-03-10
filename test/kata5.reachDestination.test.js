const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(57, 18)).toBe("I should be there in 3 hours");
  });
});
