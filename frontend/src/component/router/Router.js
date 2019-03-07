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
import MyQuestion from "../users/MyQuestion.js";

//@router registerations
const Router = {
  "/": Home,
  "/signin": Login,
  "/join": Register,
  "/dashboard": Dashboard,
  "/dashboard-meetup": Meetup,
  "/dashboard-newmeetup": NewMeetup,
  "/dashboard-meetup/:id": EditMeetup,
  "/myaccount": MyProfile,
  "/edit-profile": EditProfile,
  "/home": HomeUser,
  "/meetup-m/:id": SingleMeetup,
  "/meetup-q/:id": AskedQ,
  "/upcoming-meetups": UpcomingMeetup,
  "/question/:id": SingleQuestion,
  "/myquestion": MyQuestion
};

export default Router;
