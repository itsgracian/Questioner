import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import MyQuestionTemp from "../templates/users/MyQuestion.js";
import SetAttribute from "../helper/SetAttribute.js";
import {IsUser} from "../auth/Role.js";

class MyQuestion{
  async getData(){
    try {
      const response=await fetch(`http://localhost:5000/api/v1/questions`,{
        method:"GET",
        mode: "no-cors",
        headers:{
          "Accept":"application/json,*/*",
          "Content-Type":"application/json",
          "Authorization":getToken()
        }
      });
      const data=await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  async render(){
    //protection
    IsUser();
    const questionData=await this.getData();
    const question=questionData?questionData.data:[];
    //
    const script1=document.createElement("script");
    SetAttribute(script1,{"type":"text/javascript","src":"/src/assets/js/function/views.js"});
    const template=(`
      ${UserCss}
      ${Load}
      ${Left}
      <section class="right-side">
      ${Right}
      ${question?MyQuestionTemp(question):
        `<div class="container">
        <div class='errorPage'><h5>Whoops!! No Questions!</h5></div></div>`}
      </section>
    `);
    return template;
  }
  async after_render(){}
}
export default new MyQuestion();
