const express = require("express");

const v1Router = express.Router();

const ProblemRouter = require("./problems.routes");
v1Router.use("/problems", ProblemRouter);

module.exports = v1Router;
