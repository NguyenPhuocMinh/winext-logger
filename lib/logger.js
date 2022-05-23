'use strict';

const logUtils = require('../utils/log-util');
const loggerMiddleware = require('../middleware/logger');

function LoggingFactory(params = {}) {
  /**
   * Apply log middleware
   */
  this.loggerMiddleware = loggerMiddleware;

  /**
   * For winston
   * @param {*} name
   */
  this.getLogTracer = function (appName, name = '') {
    return logUtils.createLogger(appName, name);
  };

  this.logUtils = logUtils;
}

exports = module.exports = new LoggingFactory();
exports.register = LoggingFactory;
