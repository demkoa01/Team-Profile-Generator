// include employee constructor
const Employee = require('./Employee');

// intern constructor (as extension of employee constructor)
class Intern extends Employee {
    constructor (name, id, email, school) {
        // get employee constructor info

        super (name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

// export
module.exports = Intern;