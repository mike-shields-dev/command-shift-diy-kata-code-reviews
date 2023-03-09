const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(53, 10)).toEqual('I should be there in 5.5 hours.');
    expect(reachDestination(66, 8)).toEqual('I should be there in 8.5 hours.');
    expect(reachDestination(76, 10)).toEqual('I should be there in 8 hours.');
  });
});
