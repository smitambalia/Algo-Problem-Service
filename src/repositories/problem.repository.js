const { deleteProblem } = require("../controllers/problem.controller");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    try {
      const getAllProblems = await Problem.find({});
      return getAllProblems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblemByID(id) {
    try {
      const getProblem = await Problem.findById(id);
      return getProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblemById(problemId) {
    try {
        const deletedProblem = await Problem.findByIdAndDelete(problemId);
        return deletedProblem;
    } catch (error) {
        console.log(error)
        throw(error)
    }
  }
}

module.exports = ProblemRepository;
