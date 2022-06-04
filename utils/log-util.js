'use strict';

const winston = require('winston');
const options = require('../config/options');
const convertUtils = require('./convert-util');

const logUtils = {};

const createLogger = (appName = '-', name = '-', appColor = {}) => {
  const logger = winston.createLogger({
    levels: options.logger.levels,
    format: winston.format.combine(
      winston.format((info) => ({ ...info, level: info.level.toUpperCase() }))(),
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.label({ label: `${appName}:${name}` }),
      winston.format.printf((info) => convertUtils.convertFormatter(info, appColor))
    ),
    transports: [new winston.transports.Console({ level: 'data' })],
  });
  return logger;
};

const LogError = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.error(message, meta);
};

const LogWarn = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.warn(message, meta);
};

const LogInfo = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.info(message, meta);
};

const LogDebug = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.debug(message, meta);
};

const LogHttp = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.http(message, meta);
};

const LogVerbose = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.verbose(message, meta);
};

const LogSilly = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.silly(message, meta);
};

const LogData = (appName, name, appColor, message, meta) => {
  const logger = createLogger(appName, name, appColor);
  return logger.data(message, meta);
};

logUtils.createLogger = createLogger;

logUtils.Error = LogError;
logUtils.Warn = LogWarn;
logUtils.Info = LogInfo;
logUtils.Debug = LogDebug;
logUtils.Http = LogHttp;
logUtils.Verbose = LogVerbose;
logUtils.Silly = LogSilly;
logUtils.Data = LogData;

module.exports = logUtils;
