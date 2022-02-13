// include employee constructor
const Employee = require('./Employee');

// engineer constructor (as an extension of the employee constructor)
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // get employee constructor info
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }

};

// to export
module.exports = Engineer;