# Rock Paper Scissors App
[![](https://github.com/tarekahsan709/Rock-Paper-Scissors-App/workflows/Build/badge.svg)](https://github.com/tarekahsan709/Rock-Paper-Scissors-App/actions?query=workflow%3ABuild) 
[![](https://github.com/tarekahsan709/Rock-Paper-Scissors-App/workflows/Tests/badge.svg)](https://github.com/tarekahsan709/Rock-Paper-Scissors-App/actions?query=workflow%3ATests)

An app to allow user play Rock Paper Scissor via the browser or via an interactive CLI

- You can select playing platform
    - Browser
    - ClI
- Select the game type
    - Player Vs Computer
    - Computer vs Computer
- Play as much as possible


##  Installation
To run and build the application, you have to install dependencies for both CLI and Web.
  #### CLI
  1. Install [Node.js](https://nodejs.org). Version: `14.17.3`
  2. From project root folder run: `npm install` to install all the CLI dependencies.
  3. Run: `npm link` to create the symbolic link

  ####  Web
  1. Go to the project `app` folder
  2. From `app` folder run `npm install` to install all the web dependencies.
  3. Run `npm run build` to compiles and minifies web app.

##  Run
#### From project root folder run the following commands
- `rps-cli --play` start the application
- `rps-cli --browser` start the application in browser
- `rps-cli --help` lists the available commands
- `rps-cli --version` shows the version

#### In case of MODULE_NOT_FOUND error please re-check the Installation or use following command
- `node index.js --play` start the application
- `node index.js --browser` start the application in browser
- `node index.js --help` lists the available commands
- `node index.js --version` shows the version


## Testing
```bash
# go to project root folder and run unit tests of CLI 
npm run test

# go to app folder to run all tests for web

# run your unit tests
npm run test:unit

# run your end-to-end tests
npm run test:e2e
```
### Author

- [Nazmul Ahsan](https://github.com/tarekahsan709)
