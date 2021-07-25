#!/usr/bin/env node
const program = require('commander');

const cli = require('./cli');

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
  if (selectedPlatform === 'cli') {
    cli.play();
  } else {
    openBrowser();
  }
}

const options = program.opts();
if (options.play) {
  startGame();
}
