#!/usr/bin/env node

const express = require('express');
const path = require('path');
const program = require('commander');
const open = require('open');

const cli = require('./cli');
const { PLATFORM } = require('./util/constant');

const hostname = 'localhost';
const port = 3000;

program
  .version('1.0.0', '-v, --version', 'output the current version')
  .description('The rock, paper, scissor game')
  .option('-p, --play', 'start the game')
  .option('-b, --browser', 'open the game in browser');

program.parse(process.argv);

function createServer() {
  const app = express();
  app.use(express.static(path.join(__dirname, '/app/dist')));
  app.get('*', (req, res) => {
    res.sendFile(__dirname, '/app/dist/index.html');
  });

  app.listen(port, hostname, () => {
    console.log(`Listening at http://${hostname}:${port}`);
  });
}

async function startGameInBrowser() {
  createServer();
  await open(`http://${hostname}:${port}`);
}

async function startGame() {
  const selectedPlatform = await cli.getSelectedPlatform();
  if (selectedPlatform === PLATFORM.CLI) {
    await cli.play();
  } else {
    await startGameInBrowser();
  }
}

const options = program.opts();
if (options.play) {
  startGame();
} else if (options.browser) {
  startGameInBrowser();
}
