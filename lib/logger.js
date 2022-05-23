'use strict';

const log4js = require('log4js');
const options = require('../config/options');
const logUtils = require('../utils/log-util');
const loggerMiddleware = require('../middleware/logger');

const hasOwnProperty = Object.prototype.hasOwnProperty;

function LoggingFactory(params = {}) {
  const { config } = params;

  /**
   * Apply log middleware
   */
  this.loggerMiddleware = loggerMiddleware;

  /**
   * For winston
   * @param {*} name
   */
  this.getLogger = function (name = '') {
    return logUtils.createLogger(name);
  };

  /**
   * For log4js
   * @param {*} name
   */
  this.getLogTracer = function (name = '') {
    if (config !== undefined) {
      if (hasOwnProperty.call(config, 'log4js')) {
        const log4jsConfig = config.log4js || {};
        for (const key in log4jsConfig) {
          if (hasOwnProperty.call(key)) {
            log4js.configure(config.log4js);
          } else {
            log4js.configure(options.logger.log4js);
          }
        }
      } else {
        log4js.configure(options.logger.log4js);
      }
    }
    return log4js.getLogger(name);
  };

  this.logUtils = logUtils;
}

exports = module.exports = new LoggingFactory();
exports.register = LoggingFactory;
