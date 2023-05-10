const getEmployerRole = (employeeName, employees) => {
    const findEmployee = employees.find(employee => employeeName === employee.name);

    return findEmployee.role;
}

module.exports = getEmployerRole
