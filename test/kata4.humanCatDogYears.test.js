const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
 it("returns the age of cat and dog with given formula", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
        expect(humanCatDogYears(20)).toEqual([20, 96, 114])
        expect(humanCatDogYears(30)).toEqual([30, 136, 164])
 })
});