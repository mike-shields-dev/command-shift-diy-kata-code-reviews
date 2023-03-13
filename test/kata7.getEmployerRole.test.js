const { getEmployerRole } = require("../src");
const employees = [
  { name: "Sally", role: "Duty Manager" },
  { name: "Orson", role: "Bartender" },
  { name: "Sandor", role: "Kitchen Manager" },
  { name: "Paulina", role: "Door Supervisor" },
];

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Orson", employees)).toEqual("Bartender");
    expect(getEmployerRole("Sally", employees)).toEqual("Duty Manager");
  });
});
