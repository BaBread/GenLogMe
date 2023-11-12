const inquirer = require('inquirer');

const shapeSelect = ['Square','Circle', 'Triangle' ];

async function getInput() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for the logo (max: 3 characters)',
          },
          {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color',
          },
          {
            type: 'list',
            name: 'logoShape',
            message: 'Pick a shape for your logo',
            choices: shapeChoices,
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color',
          },
          {
            type: 'input',
            name: 'filename',
            message: 'Enter the name of the file',
          }


    ];

    try {
        const answers = await inquirer.prompt(questions);
        console.log('Chosen shape:', answers.logoShape);
        return answers;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }




};

module.exports = { getInput };