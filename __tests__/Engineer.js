const Engineer = require('../lib/Engineer');

test('create an engineer object from the employee object', () => {
    const engineer = new Engineer("Theron", 20, "email", "github");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('get the github account for the engineer', () => {
    const engineer = new Engineer("Theron", 20, "email", "github");

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('get the role for the engineer', () => {
    const engineer = new Engineer("Theron", 20, "email", "github");

    expect(engineer.getRole()).toEqual("engineer");
});