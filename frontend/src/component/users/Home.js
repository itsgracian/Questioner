import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import HomeTemp from "../templates/users/Home.js";
import {IsUser} from "../auth/Role.js";
class Home{
  async getData(){
    try {
      const response=await fetch(`http://localhost:5000/api/v1/meetups`,{
        method:"GET",
        headers:{
          "Accept":"application/json",
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
    const response=await this.getData();
    const meetup=response.data;
    const question=response? response.question:[];
    IsUser();
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
    ${meetup.length===0 ?`<div class="container">
    <div class='errorPage'><h5>Whoops!! Meetup not available! </h5></div></div>`
     : HomeTemp(meetup,question)}
    </section>`);
    return template;
  }
  async after_render(){}
}
export default new Home();
