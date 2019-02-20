import express from "express";
//
const auth = require("../../middleware/auth");
const router = express.Router();

//@controllers
const registerCtrl = require("../../controllers/auth/registerCtrl");
const loginCtrl = require("../../controllers/auth/loginCtrl");
//@router
//@router POST
//@desc register new user
router.post("/signup",registerCtrl.signup);
//@router POST
//@desc user login
router.post("/signin", loginCtrl.signin);
//logout
router.get("/logout",loginCtrl.logoutUser);

module.exports = router;
