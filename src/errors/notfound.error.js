const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class NotFountError extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "NotFound",
      StatusCodes.NOT_FOUND,
      `Requested resource ${resourceName} with value ${resourceValue} is not found`,
      {
        resourceName,
        resourceValue,
      }
    );
  }
}
module.exports = NotFountError;
