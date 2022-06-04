'use strict';

const options = require('../config/options');

const logUtils = require('../utils/log-util');
const loggerFactory = logUtils.createLogger('log-http', 'router');

const logger = (tokens, req, res) => {
  const remoteAddr = tokens['remote-addr'](req);
  const remoteUser = tokens['remote-user'](req) || '-';
  const dateClf = tokens.date(req, res, 'clf');
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const protocol = req.protocol;
  const httpVersion = tokens['http-version'](req);
  const status = tokens.status(req, res) || '-';
  const contentLength = tokens.res(req, res, 'content-length') || '-';
  const resTime = tokens['response-time'](req, res) || '-';
  const referrer = tokens.referrer(req) || '-';
  const userAgent = tokens['user-agent'](req) || '-';
  const requestID = req.requestID;

  const messageLog = `[${requestID}] - ${remoteAddr} - ${remoteUser} [${dateClf}] "${method} ${url} ${protocol}/${httpVersion}" ${status} ${contentLength} "${referrer}" "${userAgent}" - ${resTime} ms`;

  switch (status) {
    case options.httpStatus.BadRequest:
    case options.httpStatus.UnAuthorization:
    case options.httpStatus.Forbidden:
    case options.httpStatus.NotFound:
      loggerFactory.Warn(messageLog);
      break;
    case options.httpStatus.ServerError:
      loggerFactory.Error(messageLog);
      break;
    case options.httpStatus.Success:
    case options.httpStatus.Accepted:
      loggerFactory.Info(messageLog);
      break;
    case options.httpStatus.MethodNotAllow:
      loggerFactory.Verbose(messageLog);
      break;
    default:
      loggerFactory.Silly(messageLog);
      break;
  }
};

module.exports = logger;
