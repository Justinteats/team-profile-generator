const Manager = require('../lib/Manager');

test('creates a new manager object from an employee object', () => {
    const manager = new Manager("Theron", 20, "email", 13);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets the role for manager', () => {
    const manager = new Manager("Theron", 20, "email", 13);

    expect(manager.getRole()).toEqual('manager');
});