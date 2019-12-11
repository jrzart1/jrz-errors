const httpStatus = require('http-status');

class InternalServerError extends Error {
  constructor(error) {
    super(error || httpStatus['500_MESSAGE']);
    this.status = httpStatus.INTERNAL_SERVER_ERROR;
    this.type = this.constructor.name;
  }
}

module.exports = InternalServerError;
