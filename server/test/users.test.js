import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
const should=chai.should();

chai.use(chaiHttp);
let token;
//@test start
before("User Auth",(done)=>{
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
describe("User Features",()=>{
    it("Should have GET METHOD /api/v1/users/:username",(done)=>{
        chai.request(app)
        .get("/api/v1/users/itstest")
        .set("Content-type","application/json")
        .set("Authorization",token)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            res.should.be.an("object");
            res.should.have.status(200);
            done();
        })
    })
    //@should update users
    it("Should update user using PATCH  /api/v1/users/",(done)=>{
        const userUpdate={
        username: "itstest",
        firstname: "test",
        lastname: "testing",
        email: "test@test.com",
        phoneNumber: "0788989890",
        othername: "gramDB"
        }
        chai.request(app)
        .patch("/api/v1/users")
        .set("Content-type","application/json")
        .set("Accept","application/json")
        .set("Authorization",token)
        .send(userUpdate)
        .end((err,res)=>{
            if(err){
                done(err);
            }
            res.should.be.an("object");
            if(res.status===200){
                res.should.have.status(200);
                res.body.should.have.property("success");
                res.body.should.have.property("message");
                res.body.should.have.property("user");
            }
            if(res.status===500){
                res.should.have.status(500);
                res.body.should.have.property("error");
            }
            done();
        })
    })
  //@it should change user password
  it("Should change password using PATCH Mehod /api/v1/users/change-password",(done)=>{
      const data={
        newpassword: "12345678",
        recentpassword: "12345678"
      };
      chai.request(app)
      .patch("/api/v1/users/change-password")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .send(data)
      .end((err,res)=>{
          if(err){
              done(err);
          }
        res.should.be.an("object");
         res.should.have.status(200);
        res.body.should.have.property("success");
        res.body.should.have.property("message");
          done();
      })
  });
  //@it should find current user
  it("Should find current user using GET /api/v1/users/current/user",(done)=>{
      chai.request(app)
      .get("/api/v1/users/current/user")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
          if(err){
              done(err);
          }
         res.should.be.an("object");
         res.should.have.status(200);
         res.body.should.have.property("user");
          done();
      })
  })
  //@ it should change user profile'
  it("Should change user profile picture using PATCH Method /api/v1/users/profile/picture",
  (done)=>{
      const data={
        images:`http://localhost:5000/images/default-45.jpg`
      };
      chai.request(app)
      .patch("/api/v1/users/profile/picture")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .send(data)
      .end((err,res)=>{
          if(err){
              done(err);
          }
         res.should.be.an("object");
         res.should.be.status(400);
          done();
      })
  })
})
