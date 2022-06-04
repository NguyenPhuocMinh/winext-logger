'use strict';

const logUtils = require('../utils/log-util');
const loggerMiddleware = require('../middleware/logger');

function LoggingFactory(params = {}) {
  /**
   * @description Apply log middleware
   */
  this.loggerMiddleware = loggerMiddleware;

  /**
   * @description Get logTracer
   * @param {*} appName
   * @param {*} name
   * @param {*} appColor
   * @example
   * const loggerFactory = getLogTracer('application', 'logger', {
   *    error: '#f44336',
   *    warn: '#ffeb3b',
   *    info: '#4caf50',
   *    http: '#ff9800',
   *    verbose: '#00bcd4',
   *    debug: '#2962ff',
   *    silly: '#673ab7',
   *    data: '#e91e63',
   *    default: '#009688',
   * })
   */
  this.getLogTracer = function (appName, name, appColor = {}) {
    return logUtils.createLogger(appName, name, appColor);
  };

  this.logUtils = logUtils;
}

exports = module.exports = new LoggingFactory();
exports.register = LoggingFactory;
