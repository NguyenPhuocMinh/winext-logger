'use strict';

const chalk = require('chalk');
const options = require('../config/options');
const profiles = require('../config/profiles');
const validateUtils = require('../utils/validate-util');

const convertLogger = (level, label, message, timestamp, addColors = {}) => {
  switch (level) {
    case options.logger.symbols.info:
      return {
        levelLog: chalk.hex(addColors.info).bold('INFO'),
        labelLog: chalk.hex(addColors.info).bold(label),
        messageLog: chalk.hex(addColors.info).bold(message),
        timestampLog: chalk.hex(addColors.info).bold(timestamp),
      };
    case options.logger.symbols.warn:
      return {
        levelLog: chalk.hex(addColors.warn).bold('WARN'),
        labelLog: chalk.hex(addColors.warn).bold(label),
        messageLog: chalk.hex(addColors.warn).bold(message),
        timestampLog: chalk.hex(addColors.warn).bold(timestamp),
      };
    case options.logger.symbols.debug:
      return {
        levelLog: chalk.hex(addColors.debug).bold('DEBUG'),
        labelLog: chalk.hex(addColors.debug).bold(label),
        messageLog: chalk.hex(addColors.debug).bold(message),
        timestampLog: chalk.hex(addColors.debug).bold(timestamp),
      };
    case options.logger.symbols.error:
      return {
        levelLog: chalk.hex(addColors.error).bold('ERROR'),
        labelLog: chalk.hex(addColors.error).bold(label),
        messageLog: chalk.hex(addColors.error).bold(message),
        timestampLog: chalk.hex(addColors.error).bold(timestamp),
      };
    case options.logger.symbols.http:
      return {
        levelLog: chalk.hex(addColors.http).bold('HTTP'),
        labelLog: chalk.hex(addColors.http).bold(label),
        messageLog: chalk.hex(addColors.http).bold(message),
        timestampLog: chalk.hex(addColors.http).bold(timestamp),
      };
    case options.logger.symbols.verbose:
      return {
        levelLog: chalk.hex(addColors.verbose).bold('VERBOSE'),
        labelLog: chalk.hex(addColors.verbose).bold(label),
        messageLog: chalk.hex(addColors.verbose).bold(message),
        timestampLog: chalk.hex(addColors.verbose).bold(timestamp),
      };
    case options.logger.symbols.silly:
      return {
        levelLog: chalk.hex(addColors.silly).bold('SILLY'),
        labelLog: chalk.hex(addColors.silly).bold(label),
        messageLog: chalk.hex(addColors.silly).bold(message),
        timestampLog: chalk.hex(addColors.silly).bold(timestamp),
      };
    case options.logger.symbols.data:
      return {
        levelLog: chalk.hex(addColors.data).bold('DATA'),
        labelLog: chalk.hex(addColors.data).bold(label),
        messageLog: chalk.hex(addColors.data).bold(message),
        timestampLog: chalk.hex(addColors.data).bold(timestamp),
      };
    default:
      return {
        levelLog: chalk.hex(addColors.default).bold('NO LEVEL'),
        labelLog: chalk.hex(addColors.default).bold(label),
        messageLog: chalk.hex(addColors.default).bold(message),
        timestampLog: chalk.hex(addColors.default).bold(timestamp),
      };
  }
};

const convertArgs = (level, args, addColors = {}) => {
  let argsLog = '';

  if (typeof args === 'undefined') {
    return {
      argsLog,
    };
  }

  argsLog = JSON.stringify(args);

  switch (level) {
    case options.logger.symbols.info:
      return {
        argsLog: chalk.hex(addColors.info).bold(argsLog),
      };
    case options.logger.symbols.warn:
      return {
        argsLog: chalk.hex(addColors.warn).bold(argsLog),
      };
    case options.logger.symbols.debug:
      return {
        argsLog: chalk.hex(addColors.debug).bold(argsLog),
      };
    case options.logger.symbols.error:
      return {
        argsLog: chalk.hex(addColors.error).bold(argsLog),
      };
    case options.logger.symbols.http:
      return {
        argsLog: chalk.hex(addColors.http).bold(argsLog),
      };
    case options.logger.symbols.verbose:
      return {
        argsLog: chalk.hex(addColors.verbose).bold(argsLog),
      };
    case options.logger.symbols.silly:
      return {
        argsLog: chalk.hex(addColors.silly).bold(argsLog),
      };
    case options.logger.symbols.data:
      return {
        argsLog: chalk.hex(addColors.data).bold(argsLog),
      };
    default:
      return {
        argsLog: chalk.hex(addColors.default).bold(argsLog),
      };
  }
};

const convertFormatter = (info, appColor = {}) => {
  const { label, level, message, timestamp, args } = info;

  if (!validateUtils.isEmpty(appColor)) {
    for (const key in appColor) {
      if (!profiles.colorSupports.includes(appColor[key])) {
        console.warn(`Color support for logger: ${JSON.stringify(profiles.colorSupports)}`);
        throw new Error(`Color hex is not support ${key}:${appColor[key]}`);
      }
    }
  }

  const defaultColors = options.logger.colors;
  const addColors = Object.assign({}, defaultColors, appColor);

  const { levelLog, labelLog, messageLog, timestampLog } = convertLogger(level, label, message, timestamp, addColors);
  const { argsLog } = convertArgs(level, args, addColors);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

const convertUtils = {
  convertLogger,
  convertFormatter,
  convertArgs,
};

module.exports = convertUtils;
