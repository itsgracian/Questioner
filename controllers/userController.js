const bcrypt = require("bcryptjs");
const userValidation = require("../validations/register");
const User = require("../models/userModel");

exports.findAll = (req, res) => {
  const data = User.findAll();
  //check
  if (!data) {
    return res.status(404).json({ error: "sorry the requested result couldn't be found" });
  }
  return res.json(data);
};
exports.findOne = (req, res) => {
  //@findone user
  const oneUser = User.findOne(req.params.name.toLowerCase());
  //check for result
  if (!oneUser) {
    return res.status(404).json({ error: "sorry the requested result couldn't be found" });
  }
  return res.json(oneUser);
};
//@delete user
exports.delete = (req, res) => {
  const id = req.params.id;
  //@check if user id is available
  if (User.findById(id)) {
    //@deleteUser
    const rem = User.deleteUser(id);
    if (rem) {
      return res.json({ success: "user deleted successfully." });
    }
    return res.status(500).json({ error: "something wrong try again later." });
  }
  return res.status(404).json({
    error: "the requested result couldn't be found."
  });
};
//@update user
exports.update = (req, res) => {
  const id = req.params.id;
  //@check is user is available
  if (User.findById(id)) {
    //@validation
    const { errors, isValid } = userValidation(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //@user field to update
    const updateUser = {
      username: req.body.username.toLowerCase(),
      firstname: req.body.firstname.toLowerCase(),
      lastname: req.body.lastname.toLowerCase(),
      email: req.body.email,
      othername: (req.body.othername) ? req.body.othername.toLowerCase() : "",
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      isAdmin: (req.body.isAdmin) ? req.body.isAdmin : false
    };
    const arraying = User.findAll();
    const result = arraying.filter(user => user.id !== id);
    if (result.length === 0) {
      //@when result.length equal to 0 then update without checking
      //data duplication
      //@update users
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);

        return bcrypt.hash(updateUser.password, salt, (error, hash) => {
          if (error) return res.status(500).json(error);
          updateUser.password = hash;
          updateUser.id = id;
          return res.json({
            success: "user updated successfully.",
            userUpdated: User.updateUser(id, updateUser)
          });
        });
      });
    } else {
      result.forEach((user) => {
        //prevent username duplication
        if (user.username === updateUser.username) {
          return res.status(400).json({ error: "username already exist." });
        }
        //prevent email duplication
        if (user.email === updateUser.email) {
          return res.status(400).json({ error: "email already exist." });
        }
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return res.status(500).json(err);
          return bcrypt.hash(updateUser.password, salt, (error, hash) => {
            if (error) return res.status(500).json(error);
            updateUser.password = hash;
            updateUser.id = id;
            return res.json({
              success: "user updated successfully.",
              userUpdated: User.updateUser(id, updateUser)
            });
          });
        });
        return true;
      }); //@end forEach
    } //@end else
    return false;
  }
  return res.status(404).json({
    error: "the requested result couldn't be found."
  });
};
