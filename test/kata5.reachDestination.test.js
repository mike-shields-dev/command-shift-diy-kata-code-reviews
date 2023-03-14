const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(57, 18)).toBe("I should be there in 3.5 hours");
    expect(reachDestination(99, 7)).toBe("I should be there in 14.5 hours");
  });
});
