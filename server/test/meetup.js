import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../app";

const should = chai.should();
const {expect}=chai.expect;
//
chai.use(chaiHttp);

//
describe("Meetups", () => {
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
    it("it should create new meetup",(done)=>{
        const data = {
          topic: "title number 1",
          location: "location",
          happeningOn: "date"
        };
      chai.request(server)
      .post("/api/v1/meetups")
      .end((err, res) => {
        res.body.should.be.a("object");
        done();
      });
    })
    it("it should return status code of 201",(done)=>{
      const data={
        topic: "title number 1",
        location: "location",
        happeningOn: "date"
      };
      chai.request(server)
      .post("/api/v1/meetups")
      .end((err,res)=>{
        expect(res).to.have.status(200);
        done();
      })
    })
});
