// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'what is the title of the repo?'
}, {
    type: 'list',
    name: 'license',
    message: 'what type of license will you use?',
    choices: ['MIT', 'APACHE', 'none'] //TODO research license types and add couple more to choices
},
// TODO what else do I want in my readme file
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        console.log(generateMarkdown(data));
       // writeToFile(data.title, data)

        const content = generateMarkdown(data)

        // TODO bring file writing into separate function 
        fs.writeFile(path.join(__dirname, data.title), content, err => {
            console.log(err);
        } );
    });
}

// Function call to initialize app
init();
