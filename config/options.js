'use strict';

const options = {};

const logger = {
  symbols: {
    info: '\x1B[32mINFO\x1B[39m',
    warn: '\x1B[33mWARN\x1B[39m',
    debug: '\x1B[34mDEBUG\x1B[39m',
    error: '\x1B[31mERROR\x1B[39m',
    http: '\x1B[32mHTTP\x1B[39m',
    verbose: '\x1B[36mVERBOSE\x1B[39m',
    silly: '\x1B[35mSILLY\x1B[39m',
  },
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: '#f44336',
    warn: '#ffeb3b',
    info: '#4caf50',
    http: '#ff9800',
    verbose: '#00bcd4',
    debug: '#2196f3',
    silly: '#673ab7',
    default: '#009688',
  },
};

options.logger = logger;

module.exports = options;
