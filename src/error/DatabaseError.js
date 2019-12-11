const httpStatus = require('http-status');

class DatabaseError extends Error {
  constructor(error) {
    super(error || httpStatus['503_MESSAGE']);
    this.status = httpStatus.SERVICE_UNAVAILABLE;
    this.type = this.constructor.name;
  }
}

module.exports = DatabaseError;
