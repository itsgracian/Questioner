import express from "express";
import passport from "passport";

const router = express.Router();

//@middleware
const multer = require("../../middleware/multer-config");
const role = require("../../middleware/role");
//@controller
const userCtrl = require("../../controllers/userCtrl");
const meetupCtrl = require("../../controllers/meetupCtrl");
const questionCtrl = require("../../controllers/questionCtrl");
const commentCtrl = require("../../controllers/commentCtrl");

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
//@desc findMeetup
router.get("/meetups/:id", passport.authenticate("jwt", { session: false }), meetupCtrl.findMeetupById);
//@router GET
//@desc upcoming meetup
router.get("/meetups/v/upcoming", passport.authenticate("jwt", { session: false }), meetupCtrl.upcoming);
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
router.post("/questions", passport.authenticate("jwt", { session: false }), questionCtrl.create);
//@router PATCH
//@desc upvote
router.patch("/questions/:questionId/upvote", passport.authenticate("jwt", { session: false }),
  questionCtrl.upvote);
//@router PATCH
//@desc downvote
router.patch("/questions/:questionId/downvote", passport.authenticate("jwt", { session: false }),
  questionCtrl.downvote);
//@router DELETE
//@desc delete question
router.delete("/questions/:questionId", passport.authenticate("jwt", { session: false }),
  questionCtrl.deleteQuestion);
//@end of question router
//@comment router
//@router POST
//@add comment
//@ACC Private
router.post("/comments", passport.authenticate("jwt", { session: false }), commentCtrl.create);
//@router GET
//@desc edit comments
router.get("/comments/:id", passport.authenticate("jwt", { session: false }), commentCtrl.edit);
//@router PATCH
//@update comment
router.patch("/comments/:id", passport.authenticate("jwt", { session: false }), commentCtrl.update);
//@router DELETE
//@delete comment
router.delete("/comments/:id", passport.authenticate("jwt", { session: false }), commentCtrl.deleteComment);
//@exports
module.exports = router;
