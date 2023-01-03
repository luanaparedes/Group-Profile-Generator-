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
        
    })
}