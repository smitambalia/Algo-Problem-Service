function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up!" });
}
function addProblem(req, res) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

let getProblem = (req, res) => {
  return res.status(501).json({
    message: "Not Implemented",
  });
};

function getProblems(req, res) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

function updateProblem(req, req) {
  return res.status(501).json({
    message: "Not Implemented",
  });
}

function deleteProblem(req, res) {
  return res.status(501).json({
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
