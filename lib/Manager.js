// include employee constructor
const Employee = require('./Employee');

// manager constuctor ( as extension of employee)
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // get employee constructor info
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
};

// exports
module.exports = Manager;