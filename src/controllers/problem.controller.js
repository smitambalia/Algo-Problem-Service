const NotImplementedError = require("../errors/notimplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const BadRequest = require("../errors/badrequest.error");

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

async function getProblem(req, res, next) {
  try {
    console.log("ID: ", req.params.id);
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const getProblem = await problemService.getProblemByID(req.params.id);

      return res.status(StatusCodes.OK).json({
        success: true,
        error: {},
        data: getProblem,
        message: "Successfully fetched the problem by id",
      });
    } else {
      throw new BadRequest("id");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const getAllProblems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched all the problems",
      data: getAllProblems,
    });
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, req, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      const deletedProblem = await problemService.deleteProblemById(
        req.params.id
      );
      return res.status(StatusCodes.ACCEPTED).json({
        success: true,
        error: {},
        data: deletedProblem,
        message: "Successfully deleted a problem",
      });
    }

    throw new BadRequest("id");
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
