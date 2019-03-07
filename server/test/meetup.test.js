import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
const should=chai.should();

chai.use(chaiHttp);
//@meetup test start
let token;
 before("Authentication before testing meetups",(done)=>{
    const user = {
        email: "admintest@test.com",
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
//@meetup test
describe("Meetups", () => {
  //@create meetup
  it("Should create meetups using POST method /api/v1/meetups",(done)=>{
      const meetup={
          topic:"testing meetup",
          location:"kigali",
          happeningOn:new Date("2019-3-3")
      };
      chai.request(app)
      .post("/api/v1/meetups")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .send(meetup)
      .end((err,res)=>{
          if(err){
              done(err);
          }
         res.should.be.an("object");
         res.should.have.status(200);
         res.body.should.have.property("success");
         res.body.should.have.property("message");
         res.body.should.have.property("status");
         res.body.should.have.property("data");
          done();
      })
  })
  //@should get all meetups
  it("Should get all meetups using GET Method /api/v1/meetups",(done)=>{
      chai.request(app)
      .get("/api/v1/meetups")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
         if(err){
             done(err);
         }
         res.should.be.an("object");
         res.should.have.status(200);
         res.body.should.have.property("status");
         res.body.should.have.property("data");
        done();
      })
  })
  //@should find single meetup
  it("Should find single meetup /api/v1/meetups/v/:meetup_id",(done)=>{
    chai.request(app)
    .get("/api/v1/meetups/v/4")
    .set("Content-type","application/json")
    .set("Accept","application/json")
    .set("Authorization",token)
    .end((err,res)=>{
        if(err){
            done(err);
        }
        res.should.be.an("object");
        if(res.status===201){
            res.should.have.status(201);
        }
        if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        done();
    })
  })
  //@should find asked questions on single meetup
  it("Should find asked questions on single meetup /api/v1/meetups/v/questions/:meetupId",
  (done)=>{
      chai.request(app)
      .get("/api/v1/meetups/v/questions/1")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
        if(err){
            done(err);
        }
        res.should.be.an("object");
        if(res.status===201){
            res.should.have.status(201);
            res.body.should.have.property("meetup");
            res.body.should.have.property("questions");
            res.body.should.have.property("questionCount");
            res.body.should.have.property("votes");
        }
        if(res.status==404){
            res.should.have.status(404);
            res.body.should.have.property("error");
        }
        if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        done();
      })
  })
  //@ should find meetup by id
  it("Should find meetup by id /api/v1/meetups/:id",(done)=>{
      chai.request(app)
      .get("/api/v1/meetups/1")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
        if(err){
            done(err);
        }
        res.should.be.an("object");
        if(res.status===200){
            res.should.have.status(200);
            res.body.should.have.property("status");
            res.body.should.have.property("data");
        }
        if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        if(res.status===404){
            res.should.have.status(404);
            res.body.should.have.property("error");
        }
        done();
      })
  })
  //should find upcoming meetup
  it("Should find Upcoming meetup /api/v1/meetups/m/upcoming",(done)=>{
      chai.request(app)
      .get("/api/v1/meetups/m/upcoming")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
          if(err){
              done(err);
          }
         res.should.be.an("object");
         if(res.status===500){
             res.should.have.status(500);
             res.body.should.have.property("error");
         }
         //check for 404
         if(res.status===404){
             res.should.have.status(404);
             res.body.should.have.property("error");
         }
         //200
         if(res.status===200){
             res.should.have.status(200);
             res.body.should.have.property("status");
             res.body.should.have.property("data");
         }
          done();
      })
  })
  //@should delete meetup
  it("Should delete meetup /api/v1/meetups/:meetup_id",(done)=>{
      chai.request(app)
      .delete("/api/v1/meetups/10")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .end((err,res)=>{
          if(err){
              done(err);
          }
          res.should.be.an("object");
          if(res.status===200){
              res.should.have.status(200);
              res.body.should.have.property("success");
              res.body.should.have.property("message");
          }
          if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("er");
            res.body.should.have.property("error");
          }
          if(res.status===400){
            res.should.have.status(400);
            res.body.should.have.property("error");
          }
          done();
      })
  })
  //@ should update meetup
  it("Should update meetup  /api/v1/meetups/:id",(done)=>{
    const data = {
        topic:"Javascript",
          location:"kigali",
          happeningOn:new Date("2019-3-3")
      };
      chai.request(app)
      .patch("/api/v1/meetups/5")
      .set("Content-type","application/json")
      .set("Accept","application/json")
      .set("Authorization",token)
      .send(data)
      .end((err,res)=>{
          if(err){
              done(err);
          }
          res.should.be.an("object");
          if(res.status===201){
              res.should.have.status(201);
              res.body.should.have.property("success");
              res.body.should.have.property("message");
          }
          if(res.status===500){
              res.should.have.status(500);
              res.body.should.have.property("error");
              res.body.should.have.property("er");
          }
          if(res.status===400){
              res.should.have.status(400);
              res.body.should.have.property("error");
          }
          done();
      })
  })
 //@should add images to meetups
 it("Should add image to meetup /api/v1/meetups/:id/images",(done)=>{
     const data={
      images:"http://localhost:5000/images/default-45.jpg"
     };
     chai.request(app)
     .post("/api/v1/meetups/4/images")
     .set("Content-type","application/json")
     .set("Accept","application/json")
     .set("Authorization",token)
     .send(data)
     .end((err,res)=>{
         if(err){
             done(err);
         }
         res.should.be.an("object");
         if(res.status===200){
             res.should.have.status(200);
         }
         if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
         }
         if(res.status===400){
            res.should.have.status(400);
            res.body.should.have.property("error");
         }
         done();
     })
 })
 //@should update tags
 it("Should update tags /api/v1/meetups/:id/tags",(done)=>{
     const data={
        tags: "Node"
     };
     chai.request(app)
     .post("/api/v1/meetups/2/tags")
     .set("Content-type","application/json")
     .set("Accept","application/json")
     .set("Authorization",token)
     .send(data)
     .end((err,res)=>{
         if(err){
             done(err);
         }
         res.should.be.an("object");
         if(res.status===200){
            res.should.have.status(200);
            res.body.should.have.property("success");
            res.body.should.have.property("message");
            res.body.should.have.property("status");
            res.body.should.have.property("data");
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

