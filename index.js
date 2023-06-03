// index.js
const { checkWord } = require("./spell-check");
const { capitalizeAllString, lowerCaseAllString } = require("./capitalize")
const chalk = require("chalk")
const log = console.log;

function run() {
    log(chalk.blue.bgRed.bold(" THE RUN FUNCTION IS FIRING!!!!!!"))
    log(chalk.red(" %%%%%%%%%%%%%%%%%%%%%%%%%%%%% "))
    // COFFEE
    log(capitalizeAllString(process.argv[2]))
    // checkWord(process.argv[2]);
}


run();
console.log("function done, signing off!")