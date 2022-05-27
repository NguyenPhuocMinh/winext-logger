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
    data: '\x1B[90mDATA\x1B[39m',
  },
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
    data: 7,
  },
  colors: {
    error: '#f44336', // red 500
    warn: '#ffeb3b', // yellow 500
    info: '#4caf50', // green 500
    http: '#ff9800', // orange 500
    verbose: '#00bcd4', // cyan 500
    debug: '#2962ff', // blue A700
    silly: '#673ab7', // deepPurple 500
    data: '#e91e63', // pink 500
    default: '#009688', // teal 500
  },
};

const httpStatus = {
  Accepted: '202',
  Success: '200',
  BadRequest: '400',
  UnAuthorization: '401',
  Forbidden: '403',
  NotFound: '404',
  MethodNotAllow: '405',
  ServerError: '500',
};

options.logger = logger;
options.httpStatus = httpStatus;

module.exports = options;
