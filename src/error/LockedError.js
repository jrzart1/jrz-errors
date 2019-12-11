const httpStatus = require('http-status');

class LockedError extends Error {
  constructor(error) {
    super(error || httpStatus['423_MESSAGE']);
    this.status = httpStatus.LOCKED;
    this.type = this.constructor.name;
  }
}

module.exports = LockedError;
