'use strict';

const winston = require('winston');
const log4js = require('log4js');
const options = require('../config/options');

const hasOwnProperty = Object.prototype.hasOwnProperty;

function LoggingFactory(params = {}) {
  const { config } = params;

  /**
   * For winston
   * @param {*} name 
   */
  this.getLogger = function (name = '') {

    winston.addColors(config !== undefined ? config.winston.colors : options.winston.colors);

    const Logger = winston.createLogger({
      levels: config !== undefined ? config.winston.levels : options.winston.levels,
      format: winston.format.combine(
        winston.format(info => ({ ...info, level: info.level.toUpperCase() }))(),
        winston.format.colorize({ all: true }),
        winston.format.simple(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.label({ label: `[${name ? name.toUpperCase() : 'LOGGER'}]` }),
        winston.format.printf((info) => formatter(info)),
      ),
      transports: [
        new winston.transports.Console(),
      ],
    });

    return Logger;
  };

  /**
   * For log4js
   * @param {*} name 
   */
  this.getLogTracer = function (name = '') {
    if (config !== undefined) {
      if (config.hasOwnProperty('log4js')) {
        const log4jsConfig = config.log4js || {};
        for (const key in log4jsConfig) {
          if (hasOwnProperty.call(key)) {
            log4js.configure(config.log4js);
          } else {
            log4js.configure(options.log4js);
          }
        }
      } else {
        log4js.configure(options.log4js);
      }
    }
    return log4js.getLogger(name);
  };
};

function formatter(info) {

  const {
    label,
    level,
    message,
    timestamp,
  } = info;

  return `${label} -- [${info.requestId}]  -- [${timestamp}] -- [${level}]: ${message} ${info.args ? JSON.stringify(info.args, null, 1) : ''}`;
}

exports = module.exports = new LoggingFactory();
exports.register = LoggingFactory
