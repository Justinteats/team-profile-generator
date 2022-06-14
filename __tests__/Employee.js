const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee("Theron", 20, "email");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets all the employee info', () => {
    const employee = new Employee("Theron", 20, "email");

    expect(employee.getName()).toEqual('Theron');
    expect(employee.getId()).toEqual(20);
    expect(employee.getEmail()).toEqual('email');
    expect(employee.getRole()).toEqual('employee');
});