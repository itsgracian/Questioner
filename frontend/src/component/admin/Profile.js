import Left from "../layout/Left.js";
import Right from "../layout/Right.js";
import UserCss from "../../assets/js/cssx/users.css.js";
import Load from "../common/Load.js";

class Profile{
  async getData(){
    try {
      const response=await fetch(`http://localhost:5000/api/v1/users/current/user`,{
        method:"GET",
        mode: "cors",
        headers:{
          "Accept":"application/json,*/*",
          "Content-Type":"application/json",
          "Authorization":getToken(),
          "Access-Control-Allow-Origin", "*"
        }
      });
      const data=await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  async render(){
    const userData=await this.getData();
    const currentUser=userData ? userData.user: [];
    const template=(`
      ${UserCss}
      ${Load}
      ${Left}
      <section class="right-side">
      ${Right}
      <!--profile!-->
      <div class="account-profile">
        <div class="profile-back">
          <div class="profile-overlay"></div>
          <img src="/src/assets/images/profileBack.jpg" alt="profileBackground">
          <div class="profile-info">
            <div class="profile-image">
              <img src="${currentUser.avatar? currentUser.avatar:`/src/assets/images/avatar.png`}" alt="avatar">
            </div>
            <div class="profile-detail">
              <div class="profile-names">
                <h1>${currentUser ? currentUser.firstname:""} ${currentUser ? currentUser.lastname:""}</h1>
              </div>
              <div class="profile-username">
                <h5>@${currentUser ? currentUser.username:""}</h5>
              </div>
            </div>
          </div>
        </div>
        <!--!-->
        <div class="other-proInfo">
          <div class="otherproHeader">
            <h3>other profile information</h3>
          </div>
          <div class="moreInfo">
            <ul>
              <li>
               <strong>Email:</strong>
               <span>${currentUser ? currentUser.email:""}</span>
              </li>
              <li>
               <strong>First Name:</strong>
               <span>${currentUser ? currentUser.firstname:""}</span>
              </li>
              <li>
               <strong>Last Name:</strong>
               <span>${currentUser ? currentUser.lastname:""}</span>
              </li>
              <li>
               <strong>username:</strong>
               <span>${currentUser ? currentUser.username:""}</span>
              </li>
              <li>
               <strong>phone number:</strong>
               <span>${currentUser ? currentUser.phonenumber:""}</span>
              </li>
            </ul>
            <a href="/#/edit-profile">
            <button type="button" name="button" class="closeAccountBtn">Edit Profile</button>
            </a>
          </div>
        </div>
      </div>
      </section>
    `);
    return template;
  }
  async after_render(){}
}
export default new Profile();
