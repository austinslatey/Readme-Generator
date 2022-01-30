// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'what is the title of the repo?',
    validate: (answer) => {
        if(answer === ''){
            return 'please enter a title name'
        }
        return true
    } 
}, 
{ 
    type: 'input',
    name: 'userStory',
    message: 'What is the user story?'
}, 
{
    type: 'input',
    name: 'description',
    message: 'What is the description'
}, 
{
    type: 'input',
    name: 'installation',
    message: 'What is needed for installation?'  
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the purpose of the project?'
},
{
    type: 'input',
    name: 'contributors',
    message: 'Who are the contributors of this project?'
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide a test case'
},
{
// Choice list for type of license the user has
    type: 'list',
    name: 'license',
    message: 'What type of license will you use?',
    choices: ['MIT', 'GPLv3', 'GPL', 'none'] 
}, 
{ 
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'

}, 
{
    // contact information
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
}
];

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
       // writeToFile(data.title, data)

        const content = generateMarkdown(data)

        //  Write readme file
        fs.writeFile(path.join(__dirname, `${data.title}.md`), content, err => {
            console.log(err);
        } );
    });
}

// Function call to initialize app
init();
