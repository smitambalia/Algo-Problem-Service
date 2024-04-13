const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class NotImplementedError extends BaseError {
  constructor(methodName) {
    super(
      "NotImplementedError",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not implemented`,
      {}
    );
  }
}

module.exports = NotImplementedError