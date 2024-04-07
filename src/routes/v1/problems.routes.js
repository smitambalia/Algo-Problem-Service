const express = require("express");
const problemRouter = express.Router();

const { problemController } = require("../../controllers");
problemRouter.get("/ping",problemController.pingProblemController)
problemRouter.get('/:id',problemController.getProblems);
problemRouter.get('/',problemController.getProblems);
problemRouter.post('/',problemController.addProblem);
problemRouter.put("/:id",problemController.updateProblem);
problemRouter.delete(":id",problemController.deleteProblem)


module.exports = problemRouter;
