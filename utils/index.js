'use strict';

const chalk = require('chalk');
const options = require('../config/options');

const formatter = (info) => {
  const { label, level, message, timestamp } = info;

  return `${label} -- [${info.requestId}] -- [${timestamp}] -- [${level}]: ${message} ${
    info.args ? convertArgs(level, info.args) : ''
  }`;
};

function convertArgs(level, args) {
  switch (level) {
    case options.levels.info:
      return chalk.green.bold(JSON.stringify(args, null, 1));
    case options.levels.warn:
      return chalk.yellow.bold(JSON.stringify(args, null, 1));
    case options.levels.debug:
      return chalk.blue.bold(JSON.stringify(args, null, 1));
    case options.levels.error:
      return chalk.red.bold(JSON.stringify(args, null, 1));
    case options.levels.data:
      return chalk.magenta.bold(JSON.stringify(args, null, 1));
    default:
      return chalk.magenta.bold(JSON.stringify(args, null, 1));
  }
}

module.exports = {
  formatter,
};
