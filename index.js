// index.js
const { checkWord, checkWords } = require("./spell-check");
const { capitalizeAllString, lowerCaseAllString } = require("./capitalize")
const chalk = require("chalk")
const log = console.log;

function run() {
    if (process.argv[2] === "checkword") {
        // runs the checkword function
        log(chalk.green("checking one word for spelling"))
        checkWord(process.argv[3]);
    } else if (process.argv[2] === "checkwords") {
        log(chalk.blue("checking many word for spelling"))
        checkWords(process.argv[3])
    } else {
        log(chalk.red("please choose a single word or phrase"))
    }
}


run();
// console.log("function done, signing off!")