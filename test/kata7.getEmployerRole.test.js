const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees1 = [{name: 'Bart', role: 'Developer'}, {name: 'Lisa', role: 'Senior Developer'}, {name: 'Maggie', role: 'Lead Developer'}];

  it("returns the employee's role in the company", () => {
    const role1 = getEmployerRole('Bart', employees1)
    expect(role1).toBe('Developer')

    const role2 = getEmployerRole('Lisa', employees1)
    expect(role2).toBe('Senior Developer')

    const role3 = getEmployerRole('Maggie', employees1)
    expect(role3).toBe('Lead Developer')
  });

  it("returns undefined if no employee is found", () => {
    const role4 = getEmployerRole('Jess', employees1)
    expect(role4).toBeUndefined();
  });
});
