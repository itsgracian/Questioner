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

//coment test
describe("Comment",()=>{
 it("Should create comment /api/v1/comments/:questionId",(done)=>{
    const data = {
        comment: "Hey man",
      };
      chai.request(app)
      .post("/api/v1/comments/25")
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
            res.body.should.have.property("user");
          }
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
 //should get comment by id
 it("Should get comment by id /api/v1/comments/:id",(done)=>{
     chai.request(app)
     .get("/api/v1/comments/1")
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
            res.body.should.have.property("data");
            res.body.should.have.property("status");
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
 //@should update comment
 it("Should update comment /api/comments/:id",(done)=>{
    const data = {
        comment: "node js in actions"
      };
      chai.request(app)
      .patch("/api/v1/comments/25")
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
            res.body.should.have.property("data");
            res.body.should.have.property("success");
            res.body.should.have.property("status");
            res.body.should.have.property("message");
        }
        //500
        if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
            //400
            if(res.status===400){
                res.should.have.status(400);
                res.body.should.have.property("errors");
            }
          done();
      })

 })
 //@ it should get all comment
 it("Should get all comment /api/v1/questions/:questionId/comments",(done)=>{
     chai.request(app)
     .get("/api/v1/questions/25/comments")
     .set("Content-type","application/json")
     .set("Accept","application/json")
     .set("Authorization",token)
     .end((err,res)=>{
         if(err){
             done(err);
         }
         res.should.be.an("object");
         if(res.status==200){
             res.should.have.status(200);
             res.body.should.have.property("data");
             res.body.should.have.property("status");
             res.body.should.have.property("total");
             res.body.should.have.property("question");
         }
         //500
         if(res.status==500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
        if(res.status==404){
            res.should.have.status(404);
            res.body.should.have.property("error");
        }
         done();
     })
 })
 //@delete
 it("Should delete comments /api/v1/comment/commentId",(done)=>{
     chai.request(app)
     .delete("/api/v1/comments/28")
     .set("Content-type","application/json")
     .set("Accept","application/json")
     .set("Authorization",token)
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
         }
           //404
           if(res.status===404){
            res.should.have.status(404);
            res.body.should.have.property("error");
        }
          //500
          if(res.status===500){
            res.should.have.status(500);
            res.body.should.have.property("error");
        }
         done();
     })
 })
})