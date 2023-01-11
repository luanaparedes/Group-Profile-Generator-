// require classes
const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

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
            anwers.email,
            answers.OfficeNumber,
        )
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
            validate: inputOfficeNum => {
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
                anwers.email,
                answers.github,
            )
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
            anwers.email,
            answers.school,
        )
            //calls prompt for main menu
         mainMenu();
    })
};


// main menu propmts options to finish building team or add an enigineer or intern 
const mainMenu = () => {
    const menuPromt = [
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Main Muenu',
            choices: [
                {value: 'Add Engineer', name: 'addEngineer'},
                {value: 'Add Intern', name: 'addIntern'},
                {value: 'Finish Building Team', name: 'finishTeam'}
            ]
        }
    ]

    return inquirer.prompt(menuPromt).then( answers => {
        if (answers.mainMenu === 'Add Engineer') {
            return engineerPrompt();
        } else if (answers.mainMenu === 'Add Intern'){
            return internPrompt();
        } else {
            return finishTeam();
        }
    })
}

managerPrompt();