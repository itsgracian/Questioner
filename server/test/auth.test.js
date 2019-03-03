import chai from "chai";
import chaiHttp from "chai-http";
import pool from "../config/connection";
const should=chai.should();
import server from "../../app";
chai.use(chaiHttp);

describe("Users Authentication", () => {
  it("POST api/v1/signup  -- Creating Account", (done) => {
    const user = {
      username: "itstest",
      password: "12345678",
      firstname: "test",
      lastname: "testing",
      email: "test@test.com",
      phoneNumber: "0788989890",
      isadmin: true,
      othername: "gramDB"
    };
    chai.request(server)
      .post("/api/v1/signup")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(user)
      .end((err, res) => {
        if(err){
          done(err);
        }
        res.should.be.an("object");
        if(res.status===201){
          res.should.have.status(201);
          res.body.should.have.property("success");
          res.body.should.have.property("user");
          res.body.should.have.property("message");
        }
        if(res.status===400){
          res.should.have.status(400);
          res.should.have.property("error");
        }
        //500
        if(res.status===500){
          res.should.have.status(500);
          res.body.should.have.property("error");
        }      
        done();
      });
  });
  it("Should POST api/v1/signin", (done) => {
    const user = {
      email: "test@test.com",
      password: "12345678"
    };
    chai.request(server)
      .post("/api/v1/signin")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(user)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.should.be.an("object");
        if(res.status===200){
          res.should.have.status(200);
        res.body.should.have.property("success");
        res.body.should.have.property("token");
        res.body.should.have.property("user");
        }
        if(res.status===400){
          res.should.have.status(400);
        }
        //500
        if(res.status===500){
          res.should.have.status(500);
          res.body.should.have.property("error");
        }
        done();
      });
  });
});

