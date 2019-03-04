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
//vote test
describe("Votes",()=>{
  it("Should upvote question",(done)=>{
    chai.request(app)
    .post("/api/v1/questions/25/upvote")
    .set("Content-type","application/json")
    .set("Accept","application/json")
    .set("Authorization",token)
    .send({})
    .end((err,res)=>{
        if(err){
            done(err);
        }
        res.should.be.an("object");
        //200
        if(res.status==200){
            res.should.have.status(200);
            res.body.should.have.property("success");
            res.body.should.have.property("message");
            res.body.should.have.property("total");
        }
        //500
        if(res.status==500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        //400
        if(res.status==400){
            res.should.have.status(400);
            res.body.should.have.property("error");
        }
        done();
    })
  })
  //@it should downvotes
  it("Should downVotes /api/v1/questions/:questionId/downvote",(done)=>{
      chai.request(app)
      .post("/api/v1/questions/25/downvote")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .send({})
      .end((err,res)=>{
        if(err){
            done(err);
        }
        res.should.be.an("object");
        //200
        if(res.status===200){
            res.should.have.status(200);
            res.body.should.have.property("success");
            res.body.should.have.property("message");
            res.body.should.have.property("total");
        }
        //500
        if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        //400
        if(res.status===400){
            res.should.have.status(400);
            res.body.should.have.property("error");
        }
        done();
    })
  })
})