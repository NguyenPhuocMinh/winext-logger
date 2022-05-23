'use strict';

const winston = require('winston');
const options = require('../config/options');
const convertUtils = require('./convert-util');

const logUtils = {};

const createLogger = (name = '') => {
  const logger = winston.createLogger({
    levels: options.logger.levels,
    format: winston.format.combine(
      winston.format((info) => ({ ...info, level: info.level.toUpperCase() }))(),
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.label({ label: `${name}` }),
      winston.format.printf((info) => convertUtils.convertFormatter(info))
    ),
    transports: [new winston.transports.Console({ level: 'silly' })],
  });
  return logger;
};

const LogError = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.error(message, meta);
};

const LogWarn = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.warn(message, meta);
};

const LogInfo = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.info(message, meta);
};

const LogDebug = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.debug(message, meta);
};

const LogHttp = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.http(message, meta);
};

const LogVerbose = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.verbose(message, meta);
};

const LogSilly = (name, message, meta) => {
  const logger = createLogger(name);
  return logger.silly(message, meta);
};

logUtils.createLogger = createLogger;

logUtils.Error = LogError;
logUtils.Warn = LogWarn;
logUtils.Info = LogInfo;
logUtils.Debug = LogDebug;
logUtils.Http = LogHttp;
logUtils.Verbose = LogVerbose;
logUtils.Silly = LogSilly;

module.exports = logUtils;
