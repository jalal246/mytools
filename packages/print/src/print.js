/* eslint-disable import/no-dynamic-require, no-console */
const chalk = require("chalk");

const {
  bgBlue,
  red: { bold: red },
  yellow: { bold: yellow },
  green: { bold: green }
} = chalk;

function msg(txt) {
  console.log(bgBlue(`\n${txt}`));
}

function success(txt) {
  console.log(green(`\n${txt}`));
}

function warning(txt) {
  console.log(yellow(`\nWarning: ${txt}`));
}

function error(txt) {
  console.log(red(`\n${txt}\n\n`));
  process.exit(1);
}

module.exports = {
  msg,
  success,
  warning,
  error
};
