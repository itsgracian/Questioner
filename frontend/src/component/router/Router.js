import Home from "../Index.js";
import Login from "../auth/Login.js";
import Register from "../auth/Register.js";
import Dashboard from "../admin/Dashboard.js";
import Meetup from "../admin/Meetup.js";
import NewMeetup from "../admin/NewMeetup.js";
import EditMeetup from "../admin/EditMeetup.js";
import EditProfile from "../admin/EditProfile.js";
import MyProfile from "../admin/Profile.js";
//user component
import HomeUser from "../users/Home.js";
import SingleMeetup from "../users/SingleMeetup.js";
import AskedQ from "../users/AskedQuestion.js";
import UpcomingMeetup from "../users/UpcomingMeetup.js";
import SingleQuestion from "../users/SingleQuestion.js";
const Router = {
  "/": Home.render(),
  "/signin": Login.render(),
  "/join": Register.render(),
  "/dashboard":Dashboard.render(),
  "/dashboard-meetup":Meetup.render(),
  "/dashboard-newmeetup":NewMeetup.render(),
  "/dashboard-meetup/:id":EditMeetup.render(),
  "/myaccount":MyProfile.render(),
  "/edit-profile":EditProfile.render(),
  "/home":HomeUser.render(),
  "/meetup-m/:id":SingleMeetup.render(),
  "/meetup-q/:id":AskedQ.render(),
  "/upcoming-meetups":UpcomingMeetup.render(),
  "/question/:id":SingleQuestion.render()
};

export default Router;
