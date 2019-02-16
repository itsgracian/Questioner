import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import SingleQ from "../templates/users/SingleQ.js";
import Utils from "../router/Utils.js";
import SetAttribute from "../helper/SetAttribute.js";

class SingleQuestion{
  async getData(id){
   try {
     const response=await fetch(`http://localhost:5000/api/v1/questions/${id}/comments`,{
       method:"GET",
       mode: "cors",
       headers:{
         "Accept":"application/json,*/*",
         "Content-Type":"application/json",
         "Authorization":getToken(),
         "Access-Control-Allow-Origin": "*"
       }
     });
     const data=await response.json();
     return data;
   } catch (e) {
    console.log(e);
   }
  }
  async render(){
    const request=await Utils.parseRequestUrl();
    const response=await this.getData(request.id);
    const comment=response?response.data:[];
    const question=response?response.question:[];
    const total=response?response.total:[];
    //append
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    SetAttribute(script,{"type":"text/javascript","src":"/src/assets/js/function/comment.js"});
    SetAttribute(script2,{"type":"text/javascript","src":"/src/assets/js/function/vote.js"});
   const template=(`
    ${UserCss}
    ${Load}
    ${Left}
    <section class="right-side">
    ${Right}
    ${SingleQ(question,comment,total)}
    </section>
     `);
    return template;
  }
  async after_render(){}
}
export default new SingleQuestion();
