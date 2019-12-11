const httpStatus = require('http-status');

class RequestError extends Error {
  constructor(error) {
    super(error || httpStatus['400_MESSAGE']);
    this.status = httpStatus.BAD_REQUEST;
    this.type = this.constructor.name;
  }
}

module.exports = RequestError;
