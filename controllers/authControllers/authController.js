const uuid = require("uuid");
const bcrypt=require("bcryptjs");
const registerValidation = require("../../validations/register");
const User = require("../../models/userModel");
/*create new user*/
exports.register = (req, res) => {
  const { errors, isValid } = registerValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const user = {
    id: uuid.v4(),
    username: req.body.username.toLowerCase(),
    firstname: req.body.firstname.toLowerCase(),
    lastname: req.body.lastname.toLowerCase(),
    email: req.body.email,
    othername: (req.body.othername)? req.body.othername.toLowerCase() : "",
    password: req.body.password,
    registered: new Date().toGMTString(),
    isAdmin: (req.body.isAdmin) ? req.body.isAdmin : false,
    phoneNumber:req.body.phoneNumber
  };
  //check for username
  if (User.checkUsername(user.username)) {
    return res.status(400).json({ error: "username already exist." });
  }
  //check for email
  if (User.checkEmail(user.email)) {
    return res.status(400).json({ error: "email already exist." });
  }
  //@hash
  bcrypt.genSalt(10,(err,salt)=>{
    if (err) {
      console.log(err);
    }
    bcrypt.hash(user.password,salt,(error,hash)=>{
      user.password=hash;
      //save new user
      const save = User.create(user);
      return res.json({
        success:"user created successfully",
        save
      });
    })
  })
};
