import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import setAttribute from "../helper/SetAttribute.js";
import {IsAdmin} from "../auth/Role.js";
class Index {
  async getData() {
    try {
      const response = await fetch("https://protected-beach-95106.herokuapp.com/api/v1/index", {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-type": "application/json",
          "Authorization": getToken()
        }
      });
      const data = await response.json();
      return data;
    } catch (e) {
      //window.location.href = "/#/signin";
      console.log(e);
    }
  }
  async render() {
    const myData = await this.getData();
    const meetup = myData ? myData.meetup : [];
    const currentUser=myData?myData.currentUser:[];

    IsAdmin();
    //
    const body = document.querySelector("body");
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    setAttribute(script1,{"src":"/src/assets/js/home.js","type":"text/javascript"});
    setAttribute(script2,{"src":"/src/assets/js/function/meetup.js","type":"text/javascript"});
    setAttribute(script3,{"src":"/src/assets/js/function/views.js","type":"text/javascript"});
    const dashboard = (`
    ${UserCss}
    ${Left}
    ${Load}
    <section class="right-side">
    ${Right}
     <!--!-->
     <div class="admin-greeting">
       <div class="admin-avatar">
         <img src="${currentUser.avatar ? currentUser.avatar:`/src/assets/images/avatar.png`}" alt="avatar">
       </div>
       <div class="admin-name">
         <h2>Howdy, ${currentUser ? `${currentUser.firstname} ${currentUser.lastname}` : " "}</h2>
       </div>
     </div>
     <!--!-->
     <div class="lts">
       <nav>
         <ul>
           <li>
             <a href="/#/dashboard">
             <img src="/src/assets/images/icons/blackIcons/mt.svg" alt="" class="ltsImg">
             <h5>Latest meetup</h5>
             </a>
           </li>
           <li>
             <a href="/#/dashboard-newmeetup">
             <img src="/src/assets/images/icons/blackIcons/browsing.svg" alt="" class="ltsImg">
             <h5>create meetup</h5>
             </a>
           </li>
         </ul>
       </nav>
     </div>
     <div class="lts-tbl">
       <div class="responsive-table">
         <table class="table">
           <thead>
             <tr>
               <th>
                <img src="/src/assets/images/icons/blackIcons/cam.svg" alt="meetup imag" class="mt-imgIco">
               </th>
               <th>Topic</th>
               <th>Location</th>
               <th>Happening on</th>
               <th>Created On</th>
               <th></th>
             </tr>
           </thead>
           <tbody class="tableBody">
            ${meetup.map(meet => `<tr>
               <td>
               <img src="${meet.images ? meet.images[0] : "http://localhost:5000/images/default-45.jpg"}" alt="" class="mt-img">
               </td>
               <td>${meet.topic ? meet.topic : ""}</td>
               <td>${meet.location ? meet.location : ""}</td>
               <td class="date">${meet.happening ? new Date(meet.happening).toDateString() : ""}</td>
               <td class="date">${meet.createdOn ? new Date(meet.createdOn).toDateString() : ""}</td>
               <td class="action">
                   <div class="openAction viewMeetUp" title="open this meetup">
                     <a href="javascript:void" onclick="View('/#/dashboard-meetup/${meet.meetup_id}');">
                       <img src="/src/assets/images/icons/blackIcons/conversation.svg" alt="">
                    </a>
                   </div>
                    <div class="openAction viewQ" title="view asked question on this meetup">
                      <a href="Javascript:void" onclick="MeetupAskedQ('/#/meetup-q/${meet.meetup_id}')" >
                        <img src="/src/assets/images/icons/blackIcons/ask.svg" alt="">
                     </a>
                    </div>
                    <div class="openAction deleteMeetup" title="delete meetup">
                      <button class="activity" onclick="trashMeetup(${meet.meetup_id ? meet.meetup_id : ""})">
                        <img src="/src/assets/images/icons/blackIcons/garbage.svg" alt="delete" class="delImg">
                     </button>
                    </div>
               </td>
             </tr>`)}
           </tbody>
         </table>
       </div>
     </div>
    </section>
    `);
    return dashboard;
  }
  async after_render(){}
}

export default new Index();
