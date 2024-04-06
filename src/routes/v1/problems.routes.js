const express = require("express");
const problemRouter = express.Router();

const { ProblemController } = require("../../controllers");
problemRouter.get("/ping",ProblemController.pingProblemController)
problemRouter.get('/:id',ProblemController.getProblems);
problemRouter.get('/',ProblemController.getProblems);
problemRouter.post('/',ProblemController.addProblem);
problemRouter.put("/:id",ProblemController.updateProblem);
problemRouter.delete(":id",ProblemController.deleteProblem)

console.log(" IN the V1")


module.exports = problemRouter;
