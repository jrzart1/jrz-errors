const httpStatus = require('http-status');
const error = require('./src/error');

const errorHandlerMW = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || httpStatus['500_MESSAGE'];
  const { type, field } = err;

  if (req.logger) req.logger.error(`Sending response code ${status}: ${message}`);

  res.status(status).json({ type, message, field });
};

const errorNotFound = (req, res) => {
  const status = httpStatus.NOT_FOUND;
  const message = `${req.path} ${httpStatus['404_MESSAGE']}`;

  res.status(status).json({ message });
};

module.exports = {
  ...error,
  errorHandlerMW,
  errorNotFound
};
