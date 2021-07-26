#!/usr/bin/env node
// /* eslint-disable */
const program = require('commander');
const open = require('open');

const cli = require('./cli');
const { PLATFORM } = require('./constant');

program
  .version('1.0.0', '-v, --version', 'output the current version')
  .description('The rock, paper, scissor game')
  .option('-p, --play', 'start the game')
  .option('-b, --browser', 'open the game in browser');

program.parse(process.argv);

async function openBrowser() {
  await open(`${__dirname}/web/index.html`);

  /* FIXME: Need to check using server
  const server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(`${__dirname}/web/index.html`)
      .pipe(res);
  });
  server.listen(3000, ()=>{
    console.log('Server is running');
  });
  await open(`localhost:3000`);
  */
}

async function startGame() {
  const selectedPlatform = await cli.getSelectPlatform();
  if (selectedPlatform === PLATFORM.CLI) {
    cli.play();
  } else {
    openBrowser();
  }
}

const options = program.opts();
if (options.play) {
  startGame();
} else if (options.browser) {
  openBrowser();
}
