import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
const should=chai.should();

chai.use(chaiHttp);
//@meetup test start
let token;
 before("Authentication before testing meetups",()=>{
   it("Shoul let user sign in",(done)=>{
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
})

//@questions test
describe("Questions",()=>{
    it("Should create question on meetups /api/v1/meetups/4/questions",(done)=>{
        const data = {
            title: "test title",
            body: "this body test"
          };
          chai.request(app)
          .post("/api/v1/meetups/4/questions")
          .set("Content-type","application/json")
          .set("Accept","application/json")
          .set("Authorization",token)
          .send(data)
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
                res.body.should.have.property("status");
                res.body.should.have.property("data");
              }
              //500
              if(res.status==500){
                  res.should.have.status(500);
                  res.body.should.have.property("error");
              }
              //404
              if(res.status===400){
                res.should.have.status(400);
                res.body.should.have.property("errors");
              }
              
              done();
          })
    })
    //@it should get user created questions
    it("Should get user questions /api/v1/questions",(done)=>{
        chai.request(app)
        .get("/api/v1/questions")
        .set("Content-type","application/json")
        .set("Accept","application/json")
        .set("Authorization",token)
        .end((err,res)=>{
            if(err){
                done(err);
            }
            res.should.be.an("object");
            //@200
            if(res.status===200){
                res.should.have.status(200);
                res.body.should.have.property("status");
                res.body.should.have.property("data");
            }
            //@500
            if(res.status===500){
                res.should.have.status(500);
                res.body.should.have.property("error");
            }
            //@404
            if(res.status===404){
                res.should.have.status(404);
                res.body.should.have.property("error");
            }
            done();
        })
    })
  //@should delete questions
  it("Should delete questions DELETE methods /api/v1/questions/:questionId",(done)=>{
      chai.request(app)
      .delete("/api/v1/questions/1")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
          if(err){
              done(err);
          }
          res.should.be.an("object");
          //@200
          if(res.status===200){
            res.should.have.status(200);
            res.body.should.have.property("success");
            res.body.should.have.property("message");
            res.body.should.have.property("status");
            res.body.should.have.property("data");
          }
          //@500
          if(res.status===500){
              res.should.have.status(500);
              res.body.should.have.property("error");
              res.body.should.have.property("err");
          }
          //@404
          if(res.status===404){
              res.should.have.status(404);
              res.body.should.have.property("error");
          }       
        done();
      })
  })

  //@should find user questions
  it("Should find questions asked by single user /api/v1/questions",(done)=>{
      chai.request(app)
      .get("/api/v1/questions")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
        if(err){
            console.log(err);
        }
        res.should.be.an("object");
        if(res.status===200){
            res.should.have.status(200);
            res.body.should.have.property("status");
            res.body.should.have.property("data");
        }
        //500
        if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        //404
        if(res.status===404){
            res.should.have.status(404);
            res.body.should.have.property("error");
        }
        done();
      })
  })
})
