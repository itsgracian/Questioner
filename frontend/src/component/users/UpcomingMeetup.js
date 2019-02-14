import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import UpcomingMeetup from "../templates/users/UpcomingMeetup.js";
import Utils from "../router/Utils.js";

class Upcoming{
  async getData(){
    const response=await fetch(`http://localhost:5000/api/v1/meetups/m/upcoming`,{
      method:"GET",
      headers:{
        "Accept":"application/json,*/*",
        "Content-type":"application/json",
        "Authorization":getToken()
      }
    });
    const data=await response.json();
    return data;
  }
  async render(){
   const upcoming=await this.getData();
   const meetup=upcoming? upcoming.data:[];
   const template=(`
     ${UserCss}
     ${Left}
     ${Load}
     <section class="right-side">
     ${Right}
     ${upcoming.error?`<div class="container">${upcoming.error}</div>`:UpcomingMeetup(meetup)}
     </section>`)
    return template;
  }
}
export default new Upcoming();
