import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";
import Utils from "../router/Utils.js";
import MeetupTemp from "../templates/admin/NewMeetup.js";
class ViewMeetup{
  async getData(id){
    try {
      const response=await fetch(`http://localhost:5000/api/v1/meetups/`+id,{
        method:"GET",
        headers:{
          "Accept":"application/json,application/text,*/*",
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
   const body = document.querySelector("body");
   const script = document.createElement("script");
   script.setAttribute("type", "text/javascript");
   script.setAttribute("src", "/src/assets/js/edit.js");
   body.appendChild(script);
   const request=Utils.parseRequestUrl();
   const response=await this.getData(request.id);
   const meetup=response? response.data:[];
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
}
export default new ViewMeetup();
