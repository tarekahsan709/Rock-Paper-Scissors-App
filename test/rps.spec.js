const { assert } = require('chai');

const rps = require('../src/rps');
const { ELEMENTS } = require('../src/constant');

describe('rock-paper-scissor', () => {
  describe('configElements()', () => {
    it('should get a valid, map object', () => {
      assert.equal(rps.configElements() instanceof Map, true);
    });

    it('should get a non empty object', () => {
      assert(rps.configElements().size > 0);
    });
  });

  describe('getElements()', () => {
    it('should get a non empty object', () => {
      assert(rps.getElements().size > 0);
    });
  });

  // FIXME: Need to write unit test code properly
  describe('getHumanChoice()', () => {
    it('should get a none empty object value', () => {

    });
  });

  // FIXME: Need to write unit test code properly
  describe('getComputerChoice()', () => {
    it('should get none empty object value', () => {
    });
  });

  // FIXME: Need to write unit test code properly
  describe('getPlayerChoice()', () => {
    it('should get a none empty object value', () => {
    });
  });

  describe('getWinner()', () => {
    const MOCK_ELEMENTS = new Map();
    MOCK_ELEMENTS.set(ELEMENTS.ROCK, { name: ELEMENTS.ROCK, weakness: [ELEMENTS.PAPER] });
    MOCK_ELEMENTS.set(ELEMENTS.PAPER, { name: ELEMENTS.PAPER, weakness: [ELEMENTS.SCISSOR] });
    MOCK_ELEMENTS.set(ELEMENTS.SCISSOR, { name: ELEMENTS.SCISSOR, weakness: [ELEMENTS.ROCK] });

    it('should get a rock as the winner', () => {
      assert.equal(rps.getWinner(MOCK_ELEMENTS.get(ELEMENTS.ROCK), MOCK_ELEMENTS.get(ELEMENTS.SCISSOR)), 'rock');
    });

    it('should get a scissor as the winner', () => {
      assert.equal(rps.getWinner(MOCK_ELEMENTS.get(ELEMENTS.SCISSOR), MOCK_ELEMENTS.get(ELEMENTS.PAPER)), 'scissor');
    });

    it('should get a papwer as the winner', () => {
      assert.equal(rps.getWinner(MOCK_ELEMENTS.get(ELEMENTS.PAPER), MOCK_ELEMENTS.get(ELEMENTS.ROCK)), 'paper');
    });

    it('should get a draw', () => {
      assert.equal(rps.getWinner(MOCK_ELEMENTS.get(ELEMENTS.PAPER), MOCK_ELEMENTS.get(ELEMENTS.PAPER)), 'draw');
    });
  });
});
