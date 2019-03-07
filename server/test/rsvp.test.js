import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
const should=chai.should();

chai.use(chaiHttp);
//@meetup test start
let token;
 before("Authentication before testing meetups",(done)=>{
    const user = {
        email: "test@test.com",
        password: "12345678"
      };
     chai.request(app)
     .post("/api/v1/signin")
     .set("Content-type","application/json")
    .set("Accept","application/json")
    .send(user)
    .end((err,res)=>{
        if(err){
            done(err);
        }
        token=res.body.token;
        res.should.be.an("object");
        res.body.should.have.property("token");
        res.should.have.status(200);
        done();
    })
})
//resvp test
describe("RSVP", () => {
  it("Should respond /api/v1/meetups/rsvp/:meetupId",(done)=>{
      chai.request(app)
      .post("/api/v1/meetups/rsvp/20")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .send({respond:"yes"})
      .end((err,res)=>{
          if(err){
              done(err);
          }
          res.should.be.an("object");
          //200
          if(res.status===200){
              res.should.have.status(200);
              res.body.should.have.property("success");
              res.body.should.have.property("status");
              res.body.should.have.property("data");
          }
               //500
               if(res.status===500){
                res.should.have.status(500);
                res.body.should.have.property("success");
                res.body.should.have.property("message");
                res.body.should.have.property("error");
                res.body.should.have.property("errors");
            }
          done();
      })
  })
})
