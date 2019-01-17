const chaihttp = require("chai-http");
const chai = require("chai");
const { expect } = require("chai");
const server = require("../../app");
const meetup = require("../controllers/meetupController");

//chaihttp middleware
chai.use(chaihttp);
//@test starts
describe("Meetup", () => {
  describe("Creating meetup", () => {
    const datas = {
      topic: "sdfklsdf",
      location: "ldsfdsf",
      happeningOn: "2019-jan-20"
    };
    it("Should return status code of 200", (done) => {
      chai.request(server)
        .post("/api/v1/meetups")
        .send(datas)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    //@when there is an error
    it("Should return status code of 400", (done) => {
      chai.request(server)
        .post("/api/v1/meetups")
        .send(meetup)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
  });
  //find all meetUp
  describe("Find all meetups", () => {
    it("Should return status code of 201", () => {
      chai.request(server)
        .get("/api/v1/meetups")
        .end((err, res) => {
          expect(res.status).to.equal(201);
        });
    });
  });
  //@find one meetUp per id
  //@when meetUp is not available
  describe("GET /Find meetup by id", () => {
    it("Should return status code of 404", (done) => {
      chai.request(server)
        .get("/api/v1/meetups/:meetupId")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
    it("Should return error message", (done) => {
      chai.request(server)
        .get("/api/v1/meetups/:meetupId")
        .end((err, res) => {
          expect(res.body.error).to.equal("sorry the requested result could not be found.");
          done();
        });
    });
  });
  //updateMeetup
  describe("PATCH updateMeetup()", () => {
    it("Should return status code of 404", (done) => {
      chai.request(server)
        .patch("/api/v1/meetups/121212121212")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
    it("Should be an object", (done) => {
      chai.request(server)
        .patch("/api/v1/meetups/meetupId")
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
  //describe DELETE
  describe("DELETE deleteMeetup", () => {
    it("Should return status code of 404", (done) => {
      chai.request(server)
        .delete("/api/v1/meetups/:meetupId")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
    it("Should return an object", (done) => {
      chai.request(server)
        .delete("/api/v1/meetups/:meetupId")
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
  //@
  describe("create()", () => {
    it("should be a function", () => {
      const result = meetup.create;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("allMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.allMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("findOneMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.findOneMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("upcomingMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.upcomingMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("deleteMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.deleteMeetup;
      expect(result).to.be.a("function");
    });
  });
  //
  describe("updateMeetup()", () => {
    it("should be a function", () => {
      const result = meetup.updateMeetup;
      expect(result).to.be.a("function");
    });
  });
  describe("GET find One meetup",()=>{
    it("should return status code of 201",()=>{
      chai.request(server)
        .get("/api/v1/meetups/:id")
        .end((err,res)=>{
          expect(res.status).to.equal(404);
        })
    })
  })
});
