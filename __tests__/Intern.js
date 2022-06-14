const Intern = require('../lib/Intern');

test('creates an intern object from employee object', () => {
    const intern = new Intern("Theron", 20, "email", "school");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets the intern's school name", () => {
    const intern = new Intern("Theron", 20, "email", "school");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets the intern's role", () => {
    const intern = new Intern("Theron", 20, "email", "school");

    expect(intern.getRole()).toEqual('intern');
});