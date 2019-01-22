//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
//
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");

const should = chai.should();


//
chai.use(chaiHttp);

//
describe("Meetups", () => {
  describe("/GET meetups", () => {
    it("it should GET all created meetup", (done) => {
      chai.request(server)
        .get("/api/v1/meetups")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .end((err, res) => {
          res.body.should.be.an("object");
          done();
        });
    });
  });
  //
  describe("POST meetups",()=>{
    it("it should create new meetup",(done)=>{
        const data = {
          topic: "title number 1",
          location: "location",
          happeningOn: "date"
        };
      chai.request(server)
      .post("/api/v1/meetups")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((err, res) => {
        res.body.should.be.a("object");
        //res.status.should.be.equal(200);
        done();
      });
    })
  })
});
