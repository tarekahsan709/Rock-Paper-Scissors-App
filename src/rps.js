const { ELEMENTS } = require('./constant');

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
  const elements = configElements();

  return elements;
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

module.exports = {
  getElements,
  getHumanChoice,
  getComputerChoice,
};
