// link to generated page
const generateHTML = require('./src/generateHTML');

// include employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// include node
const fs = require('fs');
const inquirer = require('inquirer');

