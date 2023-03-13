const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(
      getEmployerRole("Orson", [
        { name: "Sally", role: "Duty Manager" },
        { name: "Orson", role: "Bartender"},
        { name: "Sandor", role: "Kitchen Manager"},
        { name: "Paulina", role: "Door Supervisor" },
      ])
    ).toEqual("Bartender");
  });
});
