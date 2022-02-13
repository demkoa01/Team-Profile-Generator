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
            
        }
    ])
}