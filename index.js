// link to generated page
const generateHTML = require('./src/generateHTML');

// include employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// include node
const fs = require('fs');
const inquirer = require('inquirer');

// initialize team array
const teamArray = [];

// manager prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID #",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const{ name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, email, id, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    ==================
    Adding employees to team
    ==================`)

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID #",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username.");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confrimAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);

        if (confrimAddEmployee) {
            return addEmployee();
        } else {
            return teamArray;
        }
    })
};

// generate HTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has successfully been created! Please see 'index.html'.");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });