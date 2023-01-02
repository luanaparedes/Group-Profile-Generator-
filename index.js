const { truncate } = require('fs/promises');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const userPrompt = () => {
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
    ])
}