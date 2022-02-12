const Engineer = require('../lib/Engineer');

// create engineer object
test('create engineer object', () => {
    const engineer = new Engineer('Allison', 82, 'demkovich.allison@gmail.com', 'demkoa01');
    expect(engineer.github).toEqual(expect.any(String));
});

// get github name from getGithub()
test('get engineer github name', () => {
    const engineer = new Engineer('Allison', 82, 'demkovich.allison@gmail.com', 'demkoa01');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// get role from getRole()
test('get role of employee', () => {
    const engineer = new Engineer('Allison', 82, 'demkovich.allison@gmail.com', 'demkoa01');
    expect(engineer.getRole()).toEqual("Engineer");
})