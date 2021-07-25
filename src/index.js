#!/usr/bin/env node
const program = require('commander');

const cli = require('./cli');
const { PLATFORM } = require('./constant');

program
  .version('1.0.0', '-v, --version', 'output the current version')
  .description('The rock, paper, scissor game')
  .option('-p, --play', 'start the game');

program.parse(process.argv);

async function openBrowser() {
  // Open browser here
}

async function startGame() {
  const selectedPlatform = await cli.getSelectPlatform();
  if (selectedPlatform === PLATFORM.CLI) {
    cli.startGame();
  } else {
    openBrowser();
  }
}

const options = program.opts();
if (options.play) {
  startGame();
}
