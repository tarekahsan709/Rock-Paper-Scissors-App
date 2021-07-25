const inquirer = require('inquirer');

const rps = require('./rps');
const { PLATFORM, ELEMENTS } = require('./constant');

const questionPlatformChoice = [
  {
    type: 'list',
    name: 'platform',
    message: 'Select platform to paly the game!',
    choices: [PLATFORM.CLI, PLATFORM.BROWSER],
  },
];

const questionElementChoice = [
  {
    type: 'list',
    name: 'element',
    message: 'Select your playing item ',
    choices: [ELEMENTS.ROCK, ELEMENTS.PAPER, ELEMENTS.SCISSOR],
  },
];

async function getSelectPlatform() {
  return inquirer.prompt(questionPlatformChoice)
    .then((seletedPlatform) => seletedPlatform.platform);
}

function play() {
  const elements = rps.getElements();
  inquirer
    .prompt(questionElementChoice)
    .then((selectedElement) => {
      const humanChoice = rps.getHumanChoice(elements, selectedElement.element);
      const computerChoice = rps.getComputerChoice(elements);

      console.log('Player pick', humanChoice.name);
      console.log('Computer pick', computerChoice.name);
    })
    .catch((error) => {
      console.error('cli play inquirer ERROR:', error);
    });
}

module.exports = {
  getSelectPlatform,
  play,
};
