const expect = require("chai").expect;
//@controller
const userController = require("../../controllers/userController");
const authController = require("../../controllers/authControllers/authController");
//@testing start
describe("User", () => {
  describe("user registeration", () => {
    it("register() should be a function", () => {
      const result = authController.register;
      expect(result).is.a("function");
    });
  });
  //@testing validation
  describe("find all users", () => {
    it("should be a function", (done) => {
      const result = userController.findAll;
      expect(result).to.be.an("function");
      done();
    });
    it("should return an array of object", (done) => {
      const result = userController.findAll(req, res);
      expect(result).to.be.an("array");
      done();
    });
  });
});
