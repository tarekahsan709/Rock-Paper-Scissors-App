const { ELEMENTS, PLAYER_TYPE, RESULT_TYPE } = require('./util/constant');

/**
 * Configure the playing elements with their weakness.
 * @returns list of configured elements
 */
function configElements() {
  const elements = new Map();
  elements.set(ELEMENTS.ROCK, { name: ELEMENTS.ROCK, weakness: [ELEMENTS.PAPER] });
  elements.set(ELEMENTS.PAPER, { name: ELEMENTS.PAPER, weakness: [ELEMENTS.SCISSOR] });
  elements.set(ELEMENTS.SCISSOR, { name: ELEMENTS.SCISSOR, weakness: [ELEMENTS.ROCK] });

  return elements;
}

/**
 * Get the configured element
 * @returns list of playing elements
 */
function getElements() {
  return configElements();
}

/**
 *
 * @param {object} elements
 * @param {string} selectedElement
 * @returns object
 */
function getHumanChoice(elements, selectedElement) {
  return elements.get(selectedElement.toLowerCase());
}

/**
 *
 * @param {object} elements
 * @returns object selected randomly
 */
function getComputerChoice(elements) {
  let randNum = Math.random() * elements.size;
  randNum = Math.floor(randNum);
  let index = 0;
  let computerChoice;

  for (const [key, value] of elements) {
    if (index === randNum) {
      computerChoice = value;
      break;
    }
    index += 1;
  }
  return computerChoice;
}

/**
 *
 * @param {string} playerType
 * @param {list} elements
 * @param {string} selectedElement
 * @returns an element
 */
function getPlayerChoice(playerType, elements, selectedElement) {
  if (playerType === PLAYER_TYPE.HUMAN) {
    return getHumanChoice(elements, selectedElement);
  }
  return getComputerChoice(elements);
}

/**
*
* @param {object} playerOne
* @param {object} playerTwo
* @returns winner item
*/
function getWinner(playerOne, playerTwo) {
  if (playerOne.name === playerTwo.name) {
    return RESULT_TYPE.DRAW;
  }
  for (const playTwoWeakness of playerTwo.weakness) {
    if (playTwoWeakness === playerOne.name) {
      return playerOne.name;
    }
  }

  return playerTwo.name;
}

module.exports = {
  configElements,
  getElements,
  getHumanChoice,
  getComputerChoice,
  getPlayerChoice,
  getWinner,
};
