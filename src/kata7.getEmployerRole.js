const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find(
    (employeeObj) => employeeObj.name === employeeName
  );
  return employee.role;
};

module.exports = getEmployerRole;
