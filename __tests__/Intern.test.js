const Intern = require('../lib/Intern');

// create intern object
test('create intern object', () => {
    const intern = new Intern('Allison', 82, 'demkovich.allison@gmail.com', 'University of Minnesota');
    expect(intern.school).toEqual(expect.any(String));
});

// get school name from getSchool()
test('get intern school name', () => {
    const intern = new Intern('Allison', 82, 'demkovich.allison@gmail.com', 'University of Minnesota');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role from getRole()
test('get role of employee', () => {
    const intern = new Intern('Allison', 82, 'demkovich.allison@gmail.com', 'University of Minnesota');
    expect(intern.getRole()).toEqual("Intern");
})