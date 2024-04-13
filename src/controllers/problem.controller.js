const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notimplemented.error");
function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up!" });
}
function addProblem(req, res, next) {
  try {
    // nothing implemented
    throw new NotImplementedError("addProblem");
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
