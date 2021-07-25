#!/usr/bin/env node
const program = require('commander');


program
  .version('1.0.0', '-v, --version', 'output the current version')
  .description('The rock, paper, scissor game')
  .option('-p, --play', 'start the game');

program.parse(process.argv);
