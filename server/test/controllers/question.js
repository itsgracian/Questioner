const expect = require("chai").expect;

//@controller
const question = require("../../controllers/questionController");

//testing begin
describe("Question", () => {
  //@
  describe("create()", () => {
    it("should be a function", () => {
      const result = question.create;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("vote()", () => {
    it("should be a function", () => {
      const result = question.vote;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("downvote()", () => {
    it("should be a function", () => {
      const result = question.downvote;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("deleteQuestion()", () => {
    it("should be a function", () => {
      const result = question.deleteQuestion;
      expect(result).to.be.a("function");
    });
  });
});
