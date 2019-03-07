import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import UpcomingMeetup from "../templates/users/UpcomingMeetup.js";
import Utils from "../router/Utils.js";

class Upcoming {
  async getData() {
    const response = await fetch("/api/v1/meetups/m/upcoming", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json,*/*",
        "Content-Type": "application/json",
        Authorization: getToken(),
        "Access-Control-Allow-Origin": "*"
      }
    });
    const data = await response.json();
    return data;
  }

  async render() {
    const upcoming = await this.getData();
    const meetup = upcoming ? upcoming.data : [];
    const body = document.querySelector("body");
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "/src/assets/js/function/views.js");
    body.appendChild(script);
    const template = (`
     ${UserCss}
     ${Left}
     ${Load}
     <section class="right-side">
     ${Right}
     ${upcoming.error ? `<div class="container">
     <div class='errorPage'>${upcoming.error}</div></div>` : UpcomingMeetup(meetup)}
     </section>`);
    return template;
  }

  async after_render() {}
}
export default new Upcoming();
