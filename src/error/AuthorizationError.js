const httpStatus = require('http-status');

class AuthorizationError extends Error {
  constructor(error) {
    super(error || httpStatus['403_MESSAGE']);
    this.status = httpStatus.FORBIDDEN;
    this.type = this.constructor.name;
  }
}

module.exports = AuthorizationError;
