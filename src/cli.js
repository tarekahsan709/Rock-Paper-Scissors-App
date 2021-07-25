/* eslint-disable no-console */
const inquirer = require('inquirer');
const chalk = require('chalk');

const rps = require('./rps');
const {
  PLATFORM, PLAYER_TYPE, ELEMENTS,
} = require('./constant');

const questionElementChoice = [
  {
    type: 'list',
    name: 'element',
    message: 'Select your playing item ',
    choices: [ELEMENTS.ROCK, ELEMENTS.PAPER, ELEMENTS.SCISSOR],
  },
];

const questionPlatformChoice = [
  {
    type: 'list',
    name: 'platform',
    message: 'Select platform to paly game!',
    choices: [PLATFORM.CLI, PLATFORM.BROWSER],
  },
];

async function getSelectPlatform() {
  return inquirer.prompt(questionPlatformChoice)
    .then((seletedPlatform) => seletedPlatform.platform);
}

function startGame() {
  const elements = rps.getElements();
  inquirer
    .prompt(questionElementChoice)
    .then((selectedElement) => {
      const humanChoice = rps.getPlayerChoice(PLAYER_TYPE.HUMAN, elements, selectedElement.element);
      const computerChoice = rps.getPlayerChoice(PLAYER_TYPE.COMPUTER, elements, null);

      console.log(chalk.blueBright('Player one pick', humanChoice.name));
      console.log(chalk.blueBright('Computer pick', computerChoice.name));

      const winnerItem = rps.getWinner(humanChoice, computerChoice);
      console.log(chalk.yellow.bold(`Winner is ${winnerItem}`));
    })
    .catch((error) => {
      console.error('playerVsComputer inquirer ERROR:', error);
    });
}

module.exports = {
  getSelectPlatform,
  startGame,
};
