const chaihttp = require("chai-http");
const chai = require("chai");
const { expect } = require("chai");
const server = require("../../app");
const User = require("../controllers/userController");
const Auth = require("../controllers/authControllers/authController");

chai.use(chaihttp);
//@describe
  describe("GET Find all Users", () => {
    it("should return status code of 201", (done) => {
      chai.request(server)
        .get("/api/v1/users")
        .end((err, res) => {
          if (err) {
            console.log(err);
          }
          expect(res.status).to.equal(201);
          done();
        });
    });
  });
  describe("POST register user", () => {
    it("Should return status code of 400", (done) => {
      const data = {
        id: 1,
        username: "gram",
        firstname: "gram",
        lastname: "el",
        email: "gram@gmail.com",
        othername: "some",
        password: "12",
        registered: "2019-2-12",
        isAdmin: false,
        phoneNumber: "0786601003"
      };
      chai.request(server)
        .post("/api/v1/register")
        .send(data)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
    it("Should be a function", (done) => {
      const result = Auth.register;
      expect(result).to.be.a("function");
      done();
    });
  });
  describe("DELETE delete User", () => {
    it("Should return status code of 200", (done) => {
      chai.request(server)
        .delete("/api/v1/users/:id")
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
  describe("Delete user", () => {
    it("Should return status code of 404", (done) => {
      chai.request(server)
        .get("/api/v1/users/:username")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });
  describe("User.findAll()", () => {
    it("Should be a function", () => {
      const result = User.findAll;
      expect(result).to.be.a("function");
    });
  });
  describe("User.findAll()", () => {
    it("Should be an object", (done) => {
      chai.request(server)
        .get("/api/v1/users")
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
  describe("User.findAll()", () => {
    it("Should return status code of 200", (done) => {
      chai.request(server)
        .patch("/api/v1/users/34")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });
