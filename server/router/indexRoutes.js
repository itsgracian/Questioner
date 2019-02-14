import express from "express";
import view from "../controllers/viewCtrl";
const router=express.Router();

//@this router works for  API Reference
//router.get("/ref",view.index);
//router.get("/ref-meetups",view.meetups);
//router.get("/ref-comments",view.comments);
//router.get("/ref-questions",view.questions);
//router.get("/ref-rsvp",view.rsvp);
router.get("/ref-try",view.try);

module.exports=router;
