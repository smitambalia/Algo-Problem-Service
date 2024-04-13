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
      console.log("In the repo :", id);
      const getProblem = await Problem.findById(id);
      console.log(getProblem)
      return getProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
