import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import setAttribute from "../helper/SetAttribute.js";
//load template
import AllMeetup from "../templates/admin/Meetup.js";
class Meetup{
   async getMeetup(){
       try {
        const response= await fetch(`http://localhost:5000/api/v1/meetups`,{
          method:"GET",
          headers:{
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization":getToken()
          }
        });
        const data=await response.json();
        return data;
       } catch (e) {
         return false;
       }
   }
   async render(){
     const response=await this.getMeetup();
     let meetup= response ? response.data:[];
     const script1 = document.createElement("script");
     const script2 = document.createElement("script");
     const script3 = document.createElement("script");
     setAttribute(script1,{"src":"/src/assets/js/home.js","type":"text/javascript"});
     setAttribute(script2,{"src":"/src/assets/js/function/meetup.js","type":"text/javascript"});
     setAttribute(script3,{"src":"/src/assets/js/function/views.js","type":"text/javascript"});
     const template=(`
      ${UserCss}
      ${Load}
      ${Left}
      <section class="right-side">
      ${Right}
       <!--!-->
       ${AllMeetup(meetup)}
      </section>
      `);
      return template;
   }
   async after_render(){}
}
export default new Meetup();
