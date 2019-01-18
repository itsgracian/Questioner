const express = require("express");

const router = express.Router();

//@controllers
const auth = require("../controllers/authControllers/authController");
const userController = require("../controllers/userController");
const meetUp = require("../controllers/meetupController");
const question = require("../controllers/questionController");
//@middleware
const multer=require("../middleware/multer-config.js");

//@router POST
//@desc register new user
router.post("/register", auth.register);
//@router GET
//@desc find all user
router.get("/users", userController.findAll);
//@router GET
//@desc find one user
router.get("/users/:name", userController.findOne);
//@router DELETE
//@desc delete user
router.delete("/users/:id", userController.delete);
//@router PATCH
//@desc update user
router.patch("/users/:id", userController.update);
//@user router end
//@meetUp router
//@router POST
router.post("/meetups", meetUp.create);
//@router GET
//@desc get all meetups
router.get("/meetups", meetUp.allMeetup);
//@router GET
//@desc get one meetup
router.get("/meetups/:id", meetUp.findOneMeetup);
//@router GET
//@desc get upcoming meetUp
router.get("/meetups/v/upcoming/", meetUp.upcomingMeetup);
//@router DELETE
//@desc delete meetUp
router.delete("/meetups/:id", meetUp.deleteMeetup);
//@router PATCH
//@desc updete meetUp
router.patch("/meetups/:id", meetUp.updateMeetup);
//@router POST
//@desc RSPV
router.post("/meetups/:id/rsvps", meetUp.response);
//router PATCH
//@add images
router.patch("/meetups/:meetupId/images",multer, meetUp.addImage);
//@end meetup router
//@question router
//@router POST,
//@desc create question on specific meetUp
router.post("/meetups/:meetupId/questions/", question.create);
//@router patch
//@desc vote question
router.patch("/questions/:id/upvote", question.vote);
//@router patch
//@desc downvote question
router.patch("/questions/:id/downvote", question.downvote);
//@router DELETE
//@desc delete question
router.delete("/questions/:id", question.deleteQuestion);
//@router GET Question
//@desc Get all question
router.get("/questions/:userId",question.askedQ);
//@export router
module.exports = router;
