import express from "express";
import view from "../controllers/viewCtrl";
const router=express.Router();

//@this router works for  API Reference
router.get("/",view.index);
router.get("/meetups",view.meetups);
router.get("/comments",view.comments);
router.get("/questions",view.questions);
router.get("/rsvp",view.rsvp);


module.exports=router;
