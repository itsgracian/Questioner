import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import SingleQ from "../templates/users/SingleQ.js";
import Utils from "../router/Utils.js";

class SingleQuestion{
  async getData(id){
   try {
     const response=await fetch(`http://localhost:5000/api/v1/questions/${id}/comments`,{
       method:"GET",
       headers:{
         "Accept":"application/json,*/*",
         "Content-type":"application/json",
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
    const request=await Utils.parseRequestUrl();
    const response=await this.getData(request.id);
    console.log(response);
   const template=(`
    ${UserCss}
    ${Load}
    ${Left}
    <section class="right-side">
    ${Right}
    ${SingleQ()}
    </section>
     `);
    return template;
  }
}
export default new SingleQuestion();
