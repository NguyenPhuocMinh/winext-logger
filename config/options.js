'use strict';

module.exports = {
  winston: {
    levels: {
      error: 0,
      debug: 1,
      warn: 2,
      data: 3,
      info: 4
    },
    colors: {
      error: 'bold red',
      debug: 'bold blue',
      warn: 'bold yellow',
      data: 'italic magenta',
      info: 'bold green'
    }
  },
  log4js: {
    appenders: {
      out: { type: 'stdout' }
    },
    categories: {
      default: {
        appenders: ['out'],
        level: 'debug'
      }
    }
  },
  levels: {
    info: '\x1B[32m\x1B[1mINFO\x1B[22m\x1B[39m'
  }
};
