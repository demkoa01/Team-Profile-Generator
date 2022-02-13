const Employee = require('../lib/Employee');

// create employee object
test('creates an employee object', () => {
    const employee = new Employee('Allison', 82, 'demkovich.allison@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get name from getName()
test('gets employee name', () => {
    const employee = new Employee('Allison', 82, 'demkovich.allison@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// get ID from getId()
test('gets employee ID', () => {
    const employee = new Employee('Allison', 82, 'demkovich.allison@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Allison', 82, 'demkovich.allison@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));  
});

// get role from getRole()
test('gets employee role', () => {
    const employee = new Employee('Allison', 82, 'demkovich.allison@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});

