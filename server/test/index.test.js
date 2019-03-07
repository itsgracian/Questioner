import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
import {should} from "chai";

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
//@index test
describe("Index",()=>{
    it("Should get all meetups,user /api/v1/index",()=>{
        chai.request(app)
        .get("/api/v1/index")
        .set("Content-type","application/json")
        .set("Accept","application/json")
        .set("Authorization",token)
        .then((users)=>{
            if(users.rows.length===0){
                res.should.have.status(404);
            }
            res.should.have.status(200);
            res.body.should.have.property("currentUser");
        })
        .catch((error)=>{
            res.should.have.status(500);
        })
    })
})