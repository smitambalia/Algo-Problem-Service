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
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
};

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function updateProblem(req, req) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
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
