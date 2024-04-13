const BaseError = require("./base.error");

class NotFountError extends BaseError {
  constructor(details) {
    super("Not Found Error", 404, "Resource Not Found", details);
  }
}
module.exports = NotFountError;
