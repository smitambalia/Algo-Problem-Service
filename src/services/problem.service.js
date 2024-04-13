const NotFountError = require("../errors/notfound.error");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // sanitize the markdown for description
    problemData.description = sanitizeMarkdownContent(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblemByID(id) {
    console.log("IDD ", id);
    const problem = await this.problemRepository.getProblemByID(id);
    if (!problem) {
      throw new NotFountError("Problem", id);
    }
    return problem;
  }
}

module.exports = ProblemService;
