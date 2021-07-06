/* eslint-disable import/no-dynamic-require, no-console */

"use-strict";

const chalk = require("chalk");

const {
  cyanBright,
  red: { bold: red },
  yellow: { bold: yellow },
  green: { bold: green },
} = chalk;

let isSilent = false;

function setIsSilent(bool) {
  isSilent = bool;
}

function log(clr, txt) {
  if (isSilent) return;

  console.info(clr(txt));
}

function msg(txt) {
  log(cyanBright, `\n${txt}`);
}

function success(txt) {
  log(green, `\n${txt}`);
}

function warning(txt) {
  log(yellow, `\nWarning: ${txt}`);
}

function error(txt) {
  if (isSilent) return;

  console.error(red(`\n${txt}\n\n`));
}

module.exports = {
  setIsSilent,

  msg,
  success,
  warning,
  error,
};
