import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import Utils from "../router/Utils.js";
import MeetupTemp from "../templates/admin/NewMeetup.js";
import setAttribute from "../helper/SetAttribute.js";
import {IsAdmin} from "../auth/Role.js";
class ViewMeetup{
  async getData(id){
    try {
      const response=await fetch(`http://localhost:5000/api/v1/meetups/`+id,{
        method:"GET",
        headers:{
          "Accept":"application/json,application/text,*/*",
          "Content-type":"application/json",
          "Access-Control-Allow-Origin": "*",
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
   const request=Utils.parseRequestUrl();
   const response=await this.getData(request.id);
   const meetup=response? response.data:[];
   IsAdmin();
   const script1 = document.createElement("script");
   const script2 = document.createElement("script");
   const script3 = document.createElement("script");
   const script4 = document.createElement("script");
   setAttribute(script1,{"src":"/src/assets/js/home.js","type":"text/javascript"});
   setAttribute(script2,{"src":"/src/assets/js/function/meetup.js","type":"text/javascript"});
   setAttribute(script3,{"src":"/src/assets/js/function/meetupUpdateImage.js","type":"text/javascript"});
   setAttribute(script4,{"src":"/src/assets/js/edit.js","type":"text/javascript"});
   const template=(`
     ${UserCss}
     ${Load}
     ${Left}
     <section class="right-side">
     ${Right}
     <!--!-->
     <div class="editAccount">
     <div class="other-proInfo">
       <div class="otherproHeader">
         <h3>Edit Meetup</h3>
       </div>
       <div class="moreInfo">
         <form class="forms" onsubmit="return updateMeetup(${meetup[0].meetup_id});">
           ${meetup.map(meet=>MeetupTemp(meet))}
           <input type="submit" name="submit" class="closeAccountBtn" value="update">
           <h5 class="savedMsg"></h5>
         </form>
       </div>
     </div>
   </div>
   <div class="editAccount">
   <div class="other-proInfo">
     <div class="otherproHeader">
       <h3>Add Image to this Meetup</h3>
     </div>
     <div class="moreInfo">
       <form class="forms" onsubmit="return updateImage(event,${meetup[0].meetup_id})">
          <div class="editForm">
               <label for="">Images only(jpg,png,jpeg)</label>
               ${meetup.map(meet=>
                 `<input type="file" name="images" value="${meet.images? meet.images[0]:"http://localhost:5000/images/default-45.jpg"}" class="files"
                 accept="image/jpg,image/png,image/jpeg">`)}
               <div class="imagText">
                 <p></p>
                 <button type="button" name="button" onclick="browseImage()" class="browseBtn">browse image</button>
               </div>
               ${meetup.map(meet=>
                 `<div class="image-upload">
                 <img src="${meet.images? meet.images[0]:"http://localhost:5000/images/default-45.jpg"}">
                 </div>`)}
               <small key="image-error" class="textMuted"></small>
             </div>
         <input type="submit" name="submit" class="closeAccountBtn" value="update image">
         <h5 class="savedMsg imageMsg"></h5>
       </form>
     </div>
   </div>
 </div>
   <!--!-->
   <div class="msgError">

   </div>

     </section>
     `);
  return template;
 }
 async after_render(){}
}
export default new ViewMeetup();
