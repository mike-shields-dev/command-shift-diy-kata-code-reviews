const getEmployerRole = (employeeName, employees) => {
  let employeeRole;
  if (Array.isArray(employees)) {
    employees.forEach((employee) => {
      if (employee.name === employeeName) {
        employeeRole = employee.role;
      }
    });
  }
  return employeeRole;
};

module.exports = getEmployerRole;
