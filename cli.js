/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
const inquirer = require('inquirer');
const chalk = require('chalk');

const rps = require('./rps');
const {
  PLATFORM, GAME_TYPE, PLAYER_TYPE, ELEMENTS,
} = require('./util/constant');

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

const questionPlayAgain = [
  {
    type: 'confirm',
    name: 'confirmation',
    message: 'Do you want to play again ?',
  },
];

async function getSelectedPlatform() {
  return inquirer.prompt(questionPlatformChoice)
    .then((selectedPlatform) => selectedPlatform.platform);
}

function showWinner(winnerItem, playerOne, playerTwo) {
  if (winnerItem === playerOne.name) {
    console.log(chalk.yellow.bold(`Winner is player one ${playerOne.name}`));
  } else if (winnerItem === playerTwo.name) {
    console.log(chalk.yellow.bold(`Winner is player two ${playerTwo.name}`));
  } else {
    console.log(chalk.yellow.bold('It\'s a draw'));
  }
}

function showPlayerPick(playerOne, playerTwo) {
  console.log(chalk.blueBright('Player one pick', playerOne.name));
  console.log(chalk.blueBright('Player two pick', playerTwo.name));
}

function playerVsComputer() {
  const elements = rps.getElements();
  inquirer
    .prompt(questionElementChoice)
    .then((selectedElement) => {
      const playerOneChoice = rps.getPlayerChoice(PLAYER_TYPE.HUMAN, elements, selectedElement.element);
      const playerTwoChoice = rps.getPlayerChoice(PLAYER_TYPE.COMPUTER, elements, null);
      showPlayerPick(playerOneChoice, playerTwoChoice);

      const winnerItem = rps.getWinner(playerOneChoice, playerTwoChoice);
      showWinner(winnerItem, playerOneChoice, playerTwoChoice);
      playAgain();
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
    showPlayerPick(playerOneChoice, playerTwoChoice);

    const winnerItem = rps.getWinner(playerOneChoice, playerTwoChoice);
    showWinner(winnerItem, playerOneChoice, playerTwoChoice);
    playAgain();
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

function playAgain() {
  inquirer
    .prompt(questionPlayAgain)
    .then((answer) => {
      if (answer.confirmation) {
        play();
      }
    })
    .catch((error) => {
      console.error('playAgain inquirer ERROR:', error);
    });
}

module.exports = {
  getSelectedPlatform,
  play,
};
