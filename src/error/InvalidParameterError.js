const httpStatus = require('http-status');

class InvalidParameterError extends Error {
  constructor(err) {
    const error = err || new Error();
    const message = (error.constructor === String) ? error : error.message;
    const field = (error.constructor === String) ? undefined : error.field;

    super(message || httpStatus['400_MESSAGE']);
    this.status = httpStatus.BAD_REQUEST;
    this.field = field;
    this.type = this.constructor.name;
  }
}

module.exports = InvalidParameterError;
