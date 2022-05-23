'use strict';

const chalk = require('chalk');
const options = require('../config/options');

const convertUtils = {};

const convertLogger = (level, label, message) => {
  switch (level) {
    case options.logger.symbols.info:
      return {
        levelLog: chalk.hex('#4caf50').bold('INFO'),
        labelLog: chalk.hex('#4caf50').bold(label),
        messageLog: chalk.hex('#4caf50').bold(message),
      };
    case options.logger.symbols.warn:
      return {
        levelLog: chalk.hex('#ffeb3b').bold('WARN'),
        labelLog: chalk.hex('#ffeb3b').bold(label),
        messageLog: chalk.hex('#ffeb3b').bold(message),
      };
    case options.logger.symbols.debug:
      return {
        levelLog: chalk.hex('#2196f3').bold('DEBUG'),
        labelLog: chalk.hex('#2196f3').bold(label),
        messageLog: chalk.hex('#2196f3').bold(message),
      };
    case options.logger.symbols.error:
      return {
        levelLog: chalk.hex('#f44336').bold('ERROR'),
        labelLog: chalk.hex('#f44336').bold(label),
        messageLog: chalk.hex('#f44336').bold(message),
      };
    case options.logger.symbols.http:
      return {
        levelLog: chalk.hex('#ff9800').bold('HTTP'),
        labelLog: chalk.hex('#ff9800').bold(label),
        messageLog: chalk.hex('#ff9800').bold(message),
      };
    case options.logger.symbols.verbose:
      return {
        levelLog: chalk.hex('#00bcd4').bold('VERBOSE'),
        labelLog: chalk.hex('#00bcd4').bold(label),
        messageLog: chalk.hex('#00bcd4').bold(message),
      };
    case options.logger.symbols.silly:
      return {
        levelLog: chalk.hex('#673ab7').bold('SILLY'),
        labelLog: chalk.hex('#673ab7').bold(label),
        messageLog: chalk.hex('#673ab7').bold(message),
      };
    default:
      return {
        levelLog: chalk.hex('#009688').bold('NO LEVEL'),
        labelLog: chalk.hex('#009688').bold(label),
        messageLog: chalk.hex('#009688').bold(message),
      };
  }
};

const convertFormatter = (info) => {
  const { label, level, message, timestamp } = info;

  const { levelLog, labelLog, messageLog } = convertLogger(level, label, message);

  return `${labelLog} [${chalk.hex('#f73378').bold(timestamp)}] [${levelLog}]: ${messageLog}`;
};

convertUtils.convertLogger = convertLogger;
convertUtils.convertFormatter = convertFormatter;

module.exports = convertUtils;
