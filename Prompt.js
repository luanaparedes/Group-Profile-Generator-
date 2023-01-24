// require classes
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const groupMembers = [];
const body = require('./src/body');
const internCard = require('./src/internCard');
const engineerCard = require('./src/engineerCard');
const managerCard = require('./src/managerCard');
//manager prompt to start building team and gathering data
const managerPrompt = () => {
    //prompts manager for name, id, email and office number
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
        validate: inputId => {
            if (inputId) {
                return true;
            } else {
                console.log('Please enter your employee ID.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('Please enter your Email.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: inputOfficeNum => {
            if (inputOfficeNum) {
                return true;
            } else {
                console.log('Please enter your office number.');
                return false;
            }
        }
    }
    //add new manager after required fields are provided
    ]).then(answers => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        )
        groupMembers.push(manager);
        //calls prompt for main menu
        mainMenu();
    })
};

// basic data and github 
const engineerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter team-mate name.',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log('Please enter your team-mates name.');
                    return false;
                }
            }
        },
    
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your team-mates employee ID?',
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log('Please enter your team-mates employee ID.');
                    return false;
                }
            }
        },
    
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your team-mates email address',
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Please enter your team-mates email address');
                    return false;
                }
            }
        },
    
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your team-mates github user',
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log('Please enter your team-mates github user');
                    return false;
                }
            }
        }
        //add new engineer after required fields are provided
        ]).then(answers => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            )
            groupMembers.push(engineer);
            //calls prompt for main menu
            mainMenu();
        })
    };

//intern data
const internPrompt = () => {
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'name',
        message: 'Please enter team-mate name.',
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('Please enter your team-mates name.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your team-mates employee ID?',
        validate: inputId => {
            if (inputId) {
                return true;
            } else {
                console.log('Please enter your team-mates employee ID.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your team-mates email address',
        validate: inputEmail => {
            if (inputEmail) {
                return true;
            } else {
                console.log('Please enter your team-mates email address');
                return false;
            }
        }
    },
    //intern school info
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your team-mates school',
        validate: inputSchool => {
            if (inputSchool) {
                return true;
            } else {
             console.log('Please enter your team-mates school');
             return false;
           }
        }
    }
        //add new intern after required fields are provided
    ]).then(answers => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        )
        groupMembers.push(intern);
            //calls prompt for main menu
         mainMenu();
    })
};

function mainMenu() {

    return inquirer.prompt([{
        type: 'list',
        message: 'Do you want to add a new team member?',
        name: 'mainMenu',
        choices: [
            'Add Engineer',
            'Add Intern',
            'Finish building team'
        ]
    }]).then( answers => {
        if (answers.mainMenu === 'Add Engineer') {
            return engineerPrompt();
        } else if (answers.mainMenu === 'Add Intern'){
            return internPrompt();
        } else {
            return finishTeam();
        }
    })
}

function finishTeam() {
    console.log(groupMembers);
    let cards = "";

    for (var i=0; i<groupMembers.length; i++) {
        if (groupMembers[i].getRole()=== "Manager") {
            cards = cards + managerCard(groupMembers[i])
        }
        if (groupMembers[i].getRole()==="Engineer") {
            cards = cards + engineerCard(groupMembers[i])
        }
        if (groupMembers[i].getRole()==="Intern") {
         cards = cards + internCard(groupMembers[i])
        }
    }
    fs.writeFileSync('./dist/team.html', body(cards))
}

managerPrompt();