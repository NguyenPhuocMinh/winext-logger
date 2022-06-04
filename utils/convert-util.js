'use strict';

const chalk = require('chalk');
const options = require('../config/options');
const profiles = require('../config/profiles');
const validateUtils = require('../utils/validate-util');

const convertLogger = (level, label, message, timestamp, appColor = {}) => {
  switch (level) {
    case options.logger.symbols.info:
      return {
        levelLog: chalk.hex(appColor.info).bold('INFO'),
        labelLog: chalk.hex(appColor.info).bold(label),
        // messageLog: chalk.hex(appColor.info).bold(message),
        timestampLog: chalk.hex(appColor.info).bold(timestamp),
      };
    case options.logger.symbols.warn:
      return {
        levelLog: chalk.hex(appColor.warn).bold('WARN'),
        labelLog: chalk.hex(appColor.warn).bold(label),
        // messageLog: chalk.hex(appColor.warn).bold(message),
        timestampLog: chalk.hex(appColor.warn).bold(timestamp),
      };
    case options.logger.symbols.debug:
      return {
        levelLog: chalk.hex(appColor.debug).bold('DEBUG'),
        labelLog: chalk.hex(appColor.debug).bold(label),
        // messageLog: chalk.hex(appColor.debug).bold(message),
        timestampLog: chalk.hex(appColor.debug).bold(timestamp),
      };
    case options.logger.symbols.error:
      return {
        levelLog: chalk.hex(appColor.error).bold('ERROR'),
        labelLog: chalk.hex(appColor.error).bold(label),
        // messageLog: chalk.hex(appColor.error).bold(message),
        timestampLog: chalk.hex(appColor.error).bold(timestamp),
      };
    case options.logger.symbols.http:
      return {
        levelLog: chalk.hex(appColor.http).bold('HTTP'),
        labelLog: chalk.hex(appColor.http).bold(label),
        // messageLog: chalk.hex(appColor.http).bold(message),
        timestampLog: chalk.hex(appColor.http).bold(timestamp),
      };
    case options.logger.symbols.verbose:
      return {
        levelLog: chalk.hex(appColor.verbose).bold('VERBOSE'),
        labelLog: chalk.hex(appColor.verbose).bold(label),
        // messageLog: chalk.hex(appColor.verbose).bold(message),
        timestampLog: chalk.hex(appColor.verbose).bold(timestamp),
      };
    case options.logger.symbols.silly:
      return {
        levelLog: chalk.hex(appColor.silly).bold('SILLY'),
        labelLog: chalk.hex(appColor.silly).bold(label),
        // messageLog: chalk.hex(appColor.silly).bold(message),
        timestampLog: chalk.hex(appColor.silly).bold(timestamp),
      };
    case options.logger.symbols.data:
      return {
        levelLog: chalk.hex(appColor.data).bold('DATA'),
        labelLog: chalk.hex(appColor.data).bold(label),
        // messageLog: chalk.hex(appColor.data).bold(message),
        timestampLog: chalk.hex(appColor.data).bold(timestamp),
      };
    default:
      return {
        levelLog: chalk.hex(appColor.default).bold('NO LEVEL'),
        labelLog: chalk.hex(appColor.default).bold(label),
        // messageLog: chalk.hex(appColor.default).bold(message),
        timestampLog: chalk.hex(appColor.default).bold(timestamp),
      };
  }
};

const convertArgs = (level, args, appColor = {}) => {
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
        argsLog: chalk.hex(appColor.info).bold(argsLog),
      };
    case options.logger.symbols.warn:
      return {
        argsLog: chalk.hex(appColor.warn).bold(argsLog),
      };
    case options.logger.symbols.debug:
      return {
        argsLog: chalk.hex(appColor.debug).bold(argsLog),
      };
    case options.logger.symbols.error:
      return {
        argsLog: chalk.hex(appColor.error).bold(argsLog),
      };
    case options.logger.symbols.http:
      return {
        argsLog: chalk.hex(appColor.http).bold(argsLog),
      };
    case options.logger.symbols.verbose:
      return {
        argsLog: chalk.hex(appColor.verbose).bold(argsLog),
      };
    case options.logger.symbols.silly:
      return {
        argsLog: chalk.hex(appColor.silly).bold(argsLog),
      };
    case options.logger.symbols.data:
      return {
        argsLog: chalk.hex(appColor.data).bold(argsLog),
      };
    default:
      return {
        argsLog: chalk.hex(appColor.default).bold(argsLog),
      };
  }
};

const convertFormatter = (info, appColor = {}) => {
  const { label, level, message, timestamp, args } = info;

  if (validateUtils.isEmpty(appColor)) {
    appColor = options.logger.colors;
  } else {
    for (const key in appColor) {
      if (!profiles.colorSupports.includes(appColor[key])) {
        console.warn(`Color support for logger: ${JSON.stringify(profiles.colorSupports)}`);
        throw new Error(`Color hex is not support ${key}:${appColor[key]}`);
      }
    }
  }

  const { levelLog, labelLog, messageLog, timestampLog } = convertLogger(level, label, message, timestamp, appColor);
  const { argsLog } = convertArgs(level, args, appColor);

  return `${labelLog} [${timestampLog}] [${levelLog}]: ${messageLog} ${argsLog}`;
};

const convertUtils = {
  convertLogger,
  convertFormatter,
  convertArgs,
};

module.exports = convertUtils;
