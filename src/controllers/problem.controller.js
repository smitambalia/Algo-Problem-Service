

function pingProblemController(req,res) {
    return res.json({ message: "Problem Controller is up!" });
}
function addProblem(req, res) {}

let getProblem = (req, res) => {
    return res.json({ message: "get problem Controller is up!" });
};

function getProblems(req, res) {
    return res.json({ message: "get problem Controller is up!" });
}

function updateProblem(req, req) {}

function deleteProblem(req, res) {}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
  pingProblemController,
};
