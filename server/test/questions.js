const chaihttp = require("chai-http");
const chai = require("chai");
const expect = require("chai").expect;
const server = require("../../app");
const question = require("../controllers/questionController");
const Question=require("../models/questionModel");

//@
chai.use(chaihttp);
describe("Questions", () => {
  const data = {
    title: "someone",
    body: "dslkfdsfds"
  };
  describe("POST create Questions", () => {
    //@when there is an error before creating users
    it("Should return status code of 400", (done) => {
      chai.request(server)
        .post("/api/v1/meetups/8d5bc15f-68ec-4df6-b1f4-c3e6df77a0f1/questions/")
        .send(data)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
    it("Should be an object", (done) => {
      chai.request(server)
        .post("/api/v1/meetups/8d5bc15f-68ec-4df6-b1f4-c3e6df77a0f1/questions/")
        .send(data)
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          done();
        });
    });
    //
  });
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
  describe("PATCH upvote", () => {
    it("Should return status code of 201", () => {
      chai.request(server)
        .patch("/api/v1/questions/upvote")
        .end((err, res) => {
          expect(res.status).to.equal(404);
        });
    });
  });
  describe("PATCH downvote", () => {
    it("Should return status code of 201", () => {
      chai.request(server)
        .patch("/api/v1/questions/downvote")
        .end((err, res) => {
          expect(res.status).to.equal(404);
        });
    });
  });
  describe("Question",()=>{
    it("Should retun object",(done)=>{
      const element={some:12};
      const result=Question.create(element)
      expect(result).to.be.an('object');
      done();
    });
  });
});
