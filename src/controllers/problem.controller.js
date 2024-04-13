const NotImplementedError = require("../errors/notimplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up!" });
}
async function addProblem(req, res, next) {
  try {
    console.log("Incoming Request", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

let getProblem = (req, res) => {
  try {
    // nothing implemented
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
};

function getProblems(req, res) {
  try {
    // nothing implemented
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, req) {
  try {
    // nothing implemented
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    // nothing implemented
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
  pingProblemController,
};

/* 

*/
