const httpStatus = require('http-status');

class AuthenticationError extends Error {
  constructor(error) {
    super(error || httpStatus['401_MESSAGE']);
    this.status = httpStatus.UNAUTHORIZED;
    this.type = this.constructor.name;
  }
}

module.exports = AuthenticationError;
