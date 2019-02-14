import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import MeetupTemp from "../templates/admin/NewMeetup.js";
import Load from "../common/Load.js";
import IsAdmin from "../auth/IsAdmin.js";
class NewMeetup{
  render(){
    const body = document.querySelector("body");
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "/src/assets/js/function/meetup.js");
    //@appendChild
    body.appendChild(script);
    const template=(`
      ${UserCss}
      ${Left}
      <section class="right-side">
      ${Load}
      ${Right}
      <!--!-->
      <div class="editAccount">
      <div class="other-proInfo">
        <div class="otherproHeader">
          <h3>create new meetup</h3>
        </div>
        <div class="moreInfo">
          <form class="forms NewMeetup" onsubmit="return saveMeetup(event)">
            ${MeetupTemp("")}
            <input type="submit" name="submit" class="closeAccountBtn" value="save meetup">
            <h5 class="savedMsg"></h5>
          </form>
        </div>
      </div>
    </div>
      </section>
      `);
    return template;
  }
}
export default new NewMeetup();
