const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    const names1 = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];
    const result1 = 'Bart, Lisa & Maggie';
    expect(joinNames(names1)).toEqual(result1);

    const names2 = [{name: 'Jules'}, {name: 'Desmond'}, {name: 'Jess'}, {name: 'Julian'}];
    const result2 = 'Jules, Desmond, Jess & Julian';
    expect(joinNames(names2)).toEqual(result2);

    const names3 = [{name: 'David'}, {name: 'Warren'}, {name: 'Jeff'}, {name: 'Bill'}, {name: 'Developer'}];
    const result3 = 'David, Warren, Jeff, Bill & Developer';
    expect(joinNames(names3)).toEqual(result3);

    const names4 = [];
    const result4 = '';
    expect(joinNames(names4)).toEqual(result4);

    const names5 = [{name: 'Tech'}];
    const result5 = 'Tech';
    expect(joinNames(names5)).toEqual(result5);
  });
});
