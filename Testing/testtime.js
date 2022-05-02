const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require ('./utils/generateMarkdown.js');

const licensesMap = require('./utils/licenses.js')

const questions = [ {
    type: 'checkbox',
    message: 'Select licenses',
    name: 'licenses',
    choices: 
     licensesMap   
}]

const promptUser = () => {
    return inquirer.prompt(questions);
};


promptUser().then(data => {
    console.log(data)
})