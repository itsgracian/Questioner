const chaihttp = require("chai-http");
const chai = require("chai");
const { expect } = require("chai");
const uuid = require("uuid");
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
  });
  describe("For Creating Meetup", () => {
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
        .get("/api/v1/meetups/56")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
    describe("Meetup", () => {
      it("Should return error message", (done) => {
        chai.request(server)
          .get("/api/v1/meetups/45")
          .end((err, res) => {
            expect(res.body.error).to.equal("sorry the requested result could not be found.");
            done();
          });
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
  });

  //describe DELETE
  describe("DELETE deleteMeetup", () => {
    it("Should return status code of 404", (done) => {
      chai.request(server)
        .delete("/api/v1/meetups/45")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });
  describe("For DELETE meetup", () => {
    it("Should return an object", (done) => {
      chai.request(server)
        .delete("/api/v1/meetups/45")
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
  //
  describe("GET find One meetup", () => {
    it("should return status code of 201", () => {
      chai.request(server)
        .get("/api/v1/meetups/45")
        .end((err, res) => {
          expect(res.status).to.equal(404);
        });
    });
  });
  describe("updateMeetup()", () => {
    it("Should be an object", (done) => {
      chai.request(server)
        .patch("/api/v1/meetups/45")
        .send({ some: "yes" })
        .end((err, res) => {
          expect(res.body).to.be.an("object");
          done();
        });
    });
  });
});

describe("image", () => {
  it("Should return status of 200", (done) => {
    const data = {
      images: ["kjdsfdsf"]
    };
    chai.request(server)
      .patch("/api/v1/meetups/45/images")
      .send(data)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
describe("rsvps", () => {
  it("Should retu status code of 404", (done) => {
    chai.request(server)
      .post("/meetups/:id/rsvps")
      .send({
        title: "yes man"
      })
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
