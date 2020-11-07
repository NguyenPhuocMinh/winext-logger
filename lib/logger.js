'use strict';

const winston = require('winston');
const options = require('../config/options');

function Logger() {

  this.loggingFactory = function () {
    return new Promise((resolve, reject) => {
      winston.addColors(options.colors);
      const logger = winston.createLogger({
        levels: config.levels,
        format: winston.format.combine(
          winston.format.colorize({ all: true }),
          winston.format.simple(),
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          winston.format.label({ label: '[LOGGER]' }),
          winston.format.printf(info => {
            return `${info.label}-${info.level}-[${info.timestamp}]-[${info.requestId}]: ${info.message}`;
          })
        ),
        transports: [
          new winston.transports.Console()
        ],
      });
      resolve(logger);
    })
    .then(info => {
      return info;
    })
    .catch(err => {
      return Promise.reject(err);
    })

  }
};

module.exports = new Logger();
