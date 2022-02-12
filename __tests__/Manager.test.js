const Manager = require('../lib/Manager');

// manager object w/ name, , email
test('creates a Manager object', () => {
    const manager = new Manager('Allison', 82, 'demkovich.allison@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role
test('gets role of employee', () => {
    const manger = new Manager('Allison', 82, 'demkovich.allison@gmail.com');
    expect(manger.getRole()).toEqual("Manager");
});