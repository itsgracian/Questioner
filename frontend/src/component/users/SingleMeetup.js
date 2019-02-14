import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import SingleMeetup from "../templates/users/SingleMeetup.js";
import Utils from "../router/Utils.js";
class Single{
  async getData(id){
    try {
      const response=await fetch(`http://localhost:5000/api/v1/meetups/v/`+id,{
        method:"GET",
        headers:{
          "Accept":"application/json",
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
    const meetup=response? response.meetup:[];
    const questionCount=response? response.questionCount:0;
    const template = (`
    ${UserCss}
    ${Left}
    ${Load}
    <section class="right-side">
    ${Right}
    ${SingleMeetup(meetup,questionCount)}
    </section>`);
    return template;
  }
}
export default new Single();
