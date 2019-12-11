const httpStatus = require('http-status');

class NotFoundError extends Error {
  constructor(error) {
    super(error || httpStatus['404_MESSAGE']);
    this.status = httpStatus.NOT_FOUND;
    this.type = this.constructor.name;
  }
}

module.exports = NotFoundError;
