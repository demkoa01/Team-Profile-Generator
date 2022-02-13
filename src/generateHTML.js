// const Employee = require("../lib/Employee");

const generateTeam = team => {

    // manager card
    const generateManager = manager => {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>Manager</h3><i class="material-icons">content_paste</i>
                    <h4>${manager.getName()}</h4>
                </div>

                <div class="card-header">
                    <p class="id">ID: ${manager.getId()}</p>
                    <p class="email">E-Mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
        `;
    };

    // engineer card
    const generateEngineer = engineer => {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>Engineer</h3><i class="material-icons">content_paste</i>
                    <h4>${engineer.getName()}</h4>
                </div>

                <div class="card-header">
                    <p class="id">ID: ${engineer.getId()}</p>
                    <p class="email">E-Mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p class="github">Github Account: <a target="blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                </div>
            </div>
        </div>
        `;
    };

    // intern card
    const generateIntern = intern => {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>Intern</h3><i class="material-icons">content_paste</i>
                    <h4>${intern.getName()}</h4>
                </div>

                <div class="card-header">
                    <p class="id">ID: ${intern.getId()}</p>
                    <p class="email">E-Mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p class="school">School: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>
        `;
    }

    pageArray = [];

    pageArray.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    pageArray.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    pageArray.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return pageArray.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
};