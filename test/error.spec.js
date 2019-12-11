const assert = require('assert');
const sinon = require('sinon');

const error = require('../index');

describe('A error', () => {
  it('should have an appropriate http status', () => {
    const authenticationError = new error.AuthenticationError();
    assert.equal(authenticationError.type, 'AuthenticationError');
    assert.equal(authenticationError.status, 401);

    const authorizationError = new error.AuthorizationError();
    assert.equal(authorizationError.type, 'AuthorizationError');
    assert.equal(authorizationError.status, 403);

    const databaseError = new error.DatabaseError();
    assert.equal(databaseError.type, 'DatabaseError');
    assert.equal(databaseError.status, 503);

    const internalServerError = new error.InternalServerError();
    assert.equal(internalServerError.type, 'InternalServerError');
    assert.equal(internalServerError.status, 500);

    const notFoundError = new error.NotFoundError();
    assert.equal(notFoundError.type, 'NotFoundError');
    assert.equal(notFoundError.status, 404);

    const requestError = new error.RequestError();
    assert.equal(requestError.type, 'RequestError');
    assert.equal(requestError.status, 400);

    const validationError = new error.ValidationError();
    assert.equal(validationError.type, 'ValidationError');
    assert.equal(validationError.status, 400);

    const invalidParameter = new error.InvalidParameterError();
    assert.equal(invalidParameter.type, 'InvalidParameterError');
    assert.equal(invalidParameter.status, 400);
  });

  it('should be processed by middleware', () => {
    const json = sinon.spy();
    const res = { status: sinon.fake.returns({ json }) };
    const err = new error.DatabaseError('deu ruim!');

    error.errorHandlerMW(err, {}, res, undefined);
    assert.equal(json.args[0][0].type, 'DatabaseError');
  });
});
