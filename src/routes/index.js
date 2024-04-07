const express = require("express");
const apiRouter = express.Router();
const v1Router = require("./v1");

// if any request comes with /v1 , we map it to v1Router
apiRouter.use("/v1", v1Router);

module.exports = apiRouter;
