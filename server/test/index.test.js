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
//@index test
describe("Index",()=>{
    it("Should get all meetups,user /api/v1/index",(done)=>{
        chai.request(app)
        .get("/api/v1/index")
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
            }
              //500
              if(res.status===500){
                res.should.have.status(500);
            }
              //404
              if(res.status===404){
                res.should.have.status(404);
            }
            done();
        })
    })
})