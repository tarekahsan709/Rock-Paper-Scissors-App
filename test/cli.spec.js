// /* eslint-disable */

const { assert } = require('chai');
const inquirer = require('inquirer');

const cli = require('../cli');
const {
  PLATFORM,
} = require('../util/constant');

describe('Test cli functionalities', () => {
  describe('getSelectPlatform()', () => {
    before(() => {
      inquirer.prompt = () => Promise.resolve({ platform: PLATFORM.CLI });
    });
    it('should get cli', () => {
      cli.getSelectPlatform().then((answers) => {
        assert.equal(answers, PLATFORM.CLI);
      });
    });
  });

  // FIXME: Write test code
  describe('showWiner()', () => {
    it('should display the winner', () => {
    });
  });
  // FIXME: Write test code
  describe('showPlayerPick()', () => {
    it('should display the player choice', () => {
    });
  });
});
