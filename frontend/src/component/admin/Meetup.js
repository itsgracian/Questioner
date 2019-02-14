import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import IsAdmin from "../auth/IsAdmin.js";
import Load from "../common/Load.js";
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
}
export default new Meetup();
