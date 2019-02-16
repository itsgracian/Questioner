import express from "express";
import passport from "passport";

const router = express.Router();

//@middleware
const multer = require("../../middleware/multer-config");
const userProfile = require("../../middleware/profile");
const role = require("../../middleware/role");
//@controller
const userCtrl = require("../../controllers/userCtrl");
const meetupCtrl = require("../../controllers/meetupCtrl");
const questionCtrl = require("../../controllers/questionCtrl");
const commentCtrl = require("../../controllers/commentCtrl");
const voteCtrl=require("../../controllers/voteCtrl");
const rsvpCtrl=require("../../controllers/rsvpCtrl");
const indexCtrl=require("../../controllers/indexCtrl");

//Index Users
//@router GET
router.get("/index",passport.authenticate("jwt",{session:false}),indexCtrl.adminIndex);
//@router GET
//@desc find user
router.get("/users/:username", passport.authenticate("jwt", { session: false }), userCtrl.findUsername);
//@router PATCH
//@desc Update User
router.patch("/users", passport.authenticate("jwt", { session: false }), userCtrl.updateUser);
//@router DELETE
//@desc Delete User
router.delete("/users", passport.authenticate("jwt", { session: false }), userCtrl.deleteUser);
//@router PATCH
//@desc change password
router.patch("/users/change-password", passport.authenticate("jwt", { session: false }),
  userCtrl.changePassword);
//@router GET
//@desc find user by id
router.get("/users/current/user",passport.authenticate("jwt",{session:false}),userCtrl.findById);
//@router PATCH
//@change user profile Picture
router.patch("/users/profile/picture",passport.authenticate("jwt",{session:false}),userProfile,
userCtrl.changeProfile);
//@user router end
//@meetup router
//@router POST
//@Private access: only admin
router.post("/meetups", passport.authenticate("jwt", { session: false }), role.isAdmin,
  meetupCtrl.create);
//@router GET
//@desc findall meetup
router.get("/meetups", passport.authenticate("jwt", { session: false }), meetupCtrl.allMeetup);
//@router GET
//@desc view meetups and its questions
router.get("/meetups/v/:id",passport.authenticate("jwt",{session:false}),meetupCtrl.singleMeetup);
//@GET
//@asked questions on single meetup
router.get("/meetups/v/questions/:meetupId",passport.authenticate("jwt",{session:false}),
meetupCtrl.meetupAskedQuestions);
//@router GET
//@desc findMeetup
router.get("/meetups/:id", passport.authenticate("jwt", { session: false }), meetupCtrl.findMeetupById);
//@router GET
//@desc upcoming meetup
router.get("/meetups/m/upcoming", passport.authenticate("jwt", { session: false }), meetupCtrl.upcoming);
//@router DELETE
//@desc delete meetup
//@Private access: only admin
router.delete("/meetups/:id", passport.authenticate("jwt", { session: false }), role.isAdmin,
  meetupCtrl.deleteMeetup);
//@router PATCH
//@desc update meetup
//@Private access: only admin
router.patch("/meetups/:id", passport.authenticate("jwt", { session: false }), multer, role.isAdmin,
  meetupCtrl.updateMeetup);
//@router Post
//@desc add meetup images
router.post("/meetups/:id/images", passport.authenticate("jwt", { session: false }), multer, role.isAdmin,
  meetupCtrl.addImage);
//@router POST
//@desc add tags
router.post("/meetups/:id/tags", passport.authenticate("jwt", { session: false }), role.isAdmin,
  meetupCtrl.addTags);
//@end of meetup router
//@question router
//@router POST
//@desc create question
router.post("/meetups/:meetupId/questions", passport.authenticate("jwt", { session: false }),
questionCtrl.create);
//@router DELETE
//@desc delete question
router.delete("/questions/:questionId", passport.authenticate("jwt", { session: false }),
  questionCtrl.deleteQuestion);
//@router GET user questions
router.get("/questions",passport.authenticate("jwt",{session:false}),questionCtrl.myquestions);
//@end of question router
//@comment router
//@router POST
//@add comment
//@ACC Private
router.post("/comments/:questionId", passport.authenticate("jwt", { session: false }), commentCtrl.create);
//@router GET
//@desc edit comments
router.get("/comments/:id", passport.authenticate("jwt", { session: false }), commentCtrl.edit);
//@router PATCH
//@update comment
router.patch("/comments/:id", passport.authenticate("jwt", { session: false }), commentCtrl.update);
//@router DELETE
//@delete comment
router.delete("/comments/:id", passport.authenticate("jwt", { session: false }), commentCtrl.deleteComment);
//@router GET
//@desc GET all comments according to question
router.get("/questions/:questionId/comments",passport.authenticate("jwt",{session:false}),
commentCtrl.allComment);
//@end of comment routes
//@vote routes
//@router POST
//@desc upvote
router.post("/questions/:questionId/upvote", passport.authenticate("jwt", { session: false }),
  voteCtrl.upvote);
//@router POST
//@desc downvote
router.post("/questions/:questionId/downvote", passport.authenticate("jwt", { session: false }),
  voteCtrl.downvote);
//@vote routes end
//@rsvp
router.post("/meetups/rsvp/:meetupId",passport.authenticate("jwt",{ session:false }),
rsvpCtrl.respond);
//@exports
module.exports = router;
