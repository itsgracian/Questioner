import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import SingleMeetup from "../templates/users/SingleMeetup.js";
import Utils from "../router/Utils.js";
import { IsUser } from "../auth/Role.js";

class Single {
  async getData(id) {
    try {
      const response = await fetch(`/api/v1/meetups/v/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken(),
          "Access-Control-Allow-Origin": "*"
        }
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async render() {
    IsUser();
    const request = await Utils.parseRequestUrl();
    const response = await this.getData(request.id);
    const meetup = response ? response.meetup : [];
    const questionCount = response ? response.questionCount : 0;
    const body = document.querySelector("body");
    const script = document.createElement("script");
    const script2=document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script2.setAttribute("type","text/javascript");
    script.setAttribute("src", "/src/assets/js/function/views.js");
    script2.setAttribute("src","/src/assets/js/ask.js");
    body.appendChild(script);
    body.appendChild(script2);
    const template = (`
    ${UserCss}
    ${Left}
    ${Load}
    <section class="right-side">
    ${Right}
    ${SingleMeetup(meetup, questionCount)}
    </section>`);
    return template;
  }

  async after_render() {}
}
export default new Single();
