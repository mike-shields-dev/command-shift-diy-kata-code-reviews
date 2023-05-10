const {humanCatDogYears} = require("../src");

describe("humanCatDogYears", () => {
    test("returns array of human, cat and dog years when passed human years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
        expect(humanCatDogYears(-1)).toEqual(['Please enter a positive number']);
    });
});
