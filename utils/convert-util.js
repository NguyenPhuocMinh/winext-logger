'use strict';

const chalk = require('chalk');
const options = require('../config/options');

const convertUtils = {};

const convertLogger = (level, label, message, timestamp) => {
  switch (level) {
    case options.logger.symbols.info:
      return {
        levelLog: chalk.hex(options.logger.colors.info).bold('INFO'),
        labelLog: chalk.hex(options.logger.colors.info).bold(label),
        messageLog: chalk.hex(options.logger.colors.info).bold(message),
        timestampLog: chalk.hex(options.logger.colors.info).bold(timestamp),
      };
    case options.logger.symbols.warn:
      return {
        levelLog: chalk.hex(options.logger.colors.warn).bold('WARN'),
        labelLog: chalk.hex(options.logger.colors.warn).bold(label),
        messageLog: chalk.hex(options.logger.colors.warn).bold(message),
        timestampLog: chalk.hex(options.logger.colors.warn).bold(timestamp),
      };
    case options.logger.symbols.debug:
      return {
        levelLog: chalk.hex(options.logger.colors.debug).bold('DEBUG'),
        labelLog: chalk.hex(options.logger.colors.debug).bold(label),
        messageLog: chalk.hex(options.logger.colors.debug).bold(message),
        timestampLog: chalk.hex(options.logger.colors.debug).bold(timestamp),
      };
    case options.logger.symbols.error:
      return {
        levelLog: chalk.hex(options.logger.colors.error).bold('ERROR'),
        labelLog: chalk.hex(options.logger.colors.error).bold(label),
        messageLog: chalk.hex(options.logger.colors.error).bold(message),
        timestampLog: chalk.hex(options.logger.colors.error).bold(timestamp),
      };
    case options.logger.symbols.http:
      return {
        levelLog: chalk.hex(options.logger.colors.http).bold('HTTP'),
        labelLog: chalk.hex(options.logger.colors.http).bold(label),
        messageLog: chalk.hex(options.logger.colors.http).bold(message),
        timestampLog: chalk.hex(options.logger.colors.http).bold(timestamp),
      };
    case options.logger.symbols.verbose:
      return {
        levelLog: chalk.hex(options.logger.colors.verbose).bold('VERBOSE'),
        labelLog: chalk.hex(options.logger.colors.verbose).bold(label),
        messageLog: chalk.hex(options.logger.colors.verbose).bold(message),
        timestampLog: chalk.hex(options.logger.colors.verbose).bold(timestamp),
      };
    case options.logger.symbols.silly:
      return {
        levelLog: chalk.hex(options.logger.colors.silly).bold('SILLY'),
        labelLog: chalk.hex(options.logger.colors.silly).bold(label),
        messageLog: chalk.hex(options.logger.colors.silly).bold(message),
        timestampLog: chalk.hex(options.logger.colors.silly).bold(timestamp),
      };
    default:
      return {
        levelLog: chalk.hex(options.logger.colors.default).bold('NO LEVEL'),
        labelLog: chalk.hex(options.logger.colors.default).bold(label),
        messageLog: chalk.hex(options.logger.colors.default).bold(message),
        timestampLog: chalk.hex(options.logger.colors.default).bold(timestamp),
      };
  }
};

const convertArgs = (level, args) => {
  let argsLog = '';

  if (typeof args === 'undefined') {
    return {
      argsLog,
    };
  }

  if (args.length > 100) {
    argsLog = JSON.stringify(args, null, '\t');
  } else {
    argsLog = JSON.stringify(args, null, 1);
  }

  switch (level) {
    case options.logger.symbols.info:
      return {
        argsLog: chalk.hex(options.logger.colors.info).bold(argsLog),
      };
    case options.logger.symbols.warn:
      return {
        argsLog: chalk.hex(options.logger.colors.warn).bold(argsLog),
      };
    case options.logger.symbols.debug:
      return {
        argsLog: chalk.hex(options.logger.colors.debug).bold(argsLog),
      };
    case options.logger.symbols.error:
      return {
        argsLog: chalk.hex(options.logger.colors.error).bold(argsLog),
      };
    case options.logger.symbols.http:
      return {
        argsLog: chalk.hex(options.logger.colors.http).bold(argsLog),
      };
    case options.logger.symbols.verbose:
      return {
        argsLog: chalk.hex(options.logger.colors.verbose).bold(argsLog),
      };
    case options.logger.symbols.silly:
      return {
        argsLog: chalk.hex(options.logger.colors.silly).bold(argsLog),
      };
    default:
      return {
        argsLog: chalk.hex(options.logger.colors.default).bold(argsLog),
      };
  }
};

const convertFormatter = (info) => {
  const { label, level, message, timestamp, args } = info;

  const { levelLog, labelLog, messageLog, timestampLog } = convertLogger(level, label, message, timestamp);
  const { argsLog } = convertArgs(level, args);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

convertUtils.convertLogger = convertLogger;
convertUtils.convertFormatter = convertFormatter;
convertUtils.convertArgs = convertArgs;

module.exports = convertUtils;
