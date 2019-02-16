import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import AskedQ from "../templates/users/AskedQ.js";
import Utils from "../router/Utils.js";
import SetAttribute from "../helper/SetAttribute.js";

class AskedQuestion{
  async getData(id){
    try{
      const url=`http://localhost:5000/api/v1/meetups/v/questions/`+id;
      const response=await fetch(url,{
        method:"GET",
        mode: "no-cors",
        headers:{
          "Accept":"application/json,*/*",
          "Content-type":"application/json",
          "Authorization":getToken()
        }
      });
      const data=await response.json();
      return data;
    }catch(e){
      console.log(e);
    }
  }
  async render(){
    const request=Utils.parseRequestUrl();
    const response=await this.getData(request.id);
    const meetup=response? response.meetup: [];
    const question=response? response.questions:[];
    const questionCount=response? response.questionCount:0;
    const votes=response ? response.votes:[];
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    SetAttribute(script,{"type":"text/javascript","src":"/src/assets/js/function/comment.js"});
    SetAttribute(script2,{"type":"text/javascript","src":"/src/assets/js/function/views.js"});
    SetAttribute(script3,{"type":"text/javascript","src":"/src/assets/js/function/vote.js"});
    const template=(`
    ${UserCss}
    ${Left}
    ${Load}
    <section class="right-side">
    ${Right}
    ${response.error?
    `<div class="container"><div class="errorPage"><h5>${response.error}</h5></div></div>`
    :AskedQ(meetup,question,votes)}
    </section>
    `);
  return template;
  }
  async after_render(){}
}
export default new AskedQuestion();
