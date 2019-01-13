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
  //
  describe("find all users", () => {
    it("should be a function", (done) => {
      const result = userController.findAll;
      expect(result).to.be.an("function");
      done();
    });
  });
  describe("find one user", () => {
    it("should be a function", (done) => {
      const result = userController.findOne;
      expect(result).to.be.an("function");
      done();
    });
  });
  //
  describe("delete user", () => {
    it("should be a function", (done) => {
      const result = userController.delete;
      expect(result).to.be.an("function");
      done();
    });
  });
  //
  describe("update user", () => {
    it("should be a function", (done) => {
      const result = userController.update;
      expect(result).to.be.an("function");
      done();
    });
  });
});
