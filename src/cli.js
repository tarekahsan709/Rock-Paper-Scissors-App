/* eslint-disable no-console */
const inquirer = require('inquirer');
const chalk = require('chalk');

const rps = require('./rps');
const {
  PLATFORM, GAME_TYPE, PLAYER_TYPE, ELEMENTS,
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

const questionGameType = [
  {
    type: 'rawlist',
    name: 'type',
    message: 'Select game type',
    choices: [GAME_TYPE.PLAYER_VS_COMPUTER, GAME_TYPE.COMPUTER_VS_COMPUTER],
  },
];

async function getSelectPlatform() {
  return inquirer.prompt(questionPlatformChoice)
    .then((seletedPlatform) => seletedPlatform.platform);
}

function playerVsComputer() {
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

function ComputerVsComputer() {
  try {
    const elements = rps.getElements();
    const playerOneChoice = rps.getPlayerChoice(PLAYER_TYPE.COMPUTER, elements, null);
    const playerTwoChoice = rps.getPlayerChoice(PLAYER_TYPE.COMPUTER, elements, null);

    console.log(chalk.blueBright('Player one pick', playerOneChoice.name));
    console.log(chalk.blueBright('Player Two pick', playerTwoChoice.name));

    const winnerItem = rps.getWinner(playerOneChoice, playerTwoChoice);

    console.log(chalk.yellow.bold(`Winner is ${winnerItem}`));
  } catch (error) {
    console.error('ComputerVsComputer ERROR:', error);
  }
}

function startGame(gameType) {
  if (GAME_TYPE.PLAYER_VS_COMPUTER === gameType) {
    playerVsComputer();
  } else {
    ComputerVsComputer();
  }
}

async function getGameType() {
  return inquirer
    .prompt(questionGameType)
    .then((selected) => selected.type)
    .catch((error) => {
      console.error('getGameType inquirer ERROR:', error);
    });
}

async function play() {
  try {
    const gameType = await getGameType();
    startGame(gameType);
  } catch (error) {
    console.error('play ERROR:', error);
  }
}

module.exports = {
  getSelectPlatform,
  play,
};
