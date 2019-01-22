import bcrypt from "bcryptjs";
import pool from "../config/connection";
import userValidation from "../validations/updateUser";
import passwordValidation from "../validations/password";
//@

exports.findUsername = (req, res) => {
  const username = req.params.username;
  pool.query("SELECT * FROM users WHERE username=$1", [username])
    .then((user) => {
      if (user.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requested result could not be found." });
      }
      return res.json(user.rows);
    })
    .catch(e => res.status(500).json(e));
};

//@updateUser
exports.updateUser = (req, res) => {
  const id = req.user.rows[0].id;
  const { errors, isValid } = userValidation(req.body);
  const data = {
    firstname: req.body.firstname.toLowerCase(),
    lastname: req.body.lastname.toLowerCase(),
    username: req.body.username.toLowerCase(),
    email: req.body.email,
    othername: (req.body.othername) ? req.body.othername : "",
    phoneNumber: req.body.phoneNumber
  };
  //
  if (!isValid) {
    return res.status(400).json(errors);
  }
  pool.query("SELECT * FROM users WHERE id=$1", [id])
    .then((user) => {
      if (user.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requested result could not be found." });
      }
      pool.query("SELECT * FROM users WHERE id!=$1", [id])
        .then((users) => {
          const result = users.rows;
          for (let i = 0; i < result.length; i++) {
            if (result[i].username === data.username) {
              return res.status(400).json({ error: "username already exist." });
            }
            if (result[i].email === data.email) {
              return res.status(400).json({ error: "email already exist." });
            }
          }
          //updateUser
          pool.query("UPDATE users SET firstname=$1,lastname=$2,username=$3,email=$4,"
        + "othername=$5,phoneNumber=$6 WHERE id=$7",
          [data.firstname, data.lastname, data.username, data.email,
            data.othername, data.phoneNumber, id])
            .then((datas) => {
              if (datas) {
                return res.json({ success: true, message: "updated successfully.", user: data });
              }
              return res.status(500).json({ error: "something wrong try again later." });
            })
            .catch(updErr => res.status(500).json(updErr));
        })
        .catch(usersErr => res.status(500).json(usersErr));
    })
    .catch(e => res.status(500).json(e));
};

//@deleteUser
exports.deleteUser = (req, res) => {
  const id = req.user.rows[0].id;
  pool.query("SELECT * FROM users WHERE id=$1", [id])
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "the requested result could not be found." });
      }
      //@delete query
      pool.query("DELETE FROM users WHERE id=$1", [id])
        .then((user) => {
          if (user) {
            return res.json({ success: true, message: "deleted successfully." });
          }
          return res.status(500).json({ error: "something wrong try again later." });
        })
        .catch(e => res.status(500).json(e));
    })
    .catch(error => res.status(500).json(error));
};

//@changePassword
exports.changePassword = (req, res) => {
  const id = req.user.rows[0].id;
  const data = {
    newpassword: req.body.newpassword,
    recentpassword: req.body.recentpassword
  };
  const { errors, isValid } = passwordValidation(req.body);
  //@check
  if (!isValid) {
    return res.status(400).json(errors);
  }
  pool.query("SELECT * FROM users WHERE id=$1", [id])
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "the requested result could not be found." });
      }
      //@compare bcrypt
      bcrypt.compare(data.recentpassword, result.rows[0].password,
        (er, isMatch) => {
          if (er) {
            res.status(500).json(er);
          }
          if (!isMatch) {
            return res.status(400).json({ error: "recent password is incorrect." });
          }
          //@hash password
          bcrypt.genSalt(10, (ers, salt) => {
            if (ers) {
              res.status(500).json(ers);
            }
            bcrypt.hash(data.newpassword, salt, (hashErr, hash) => {
              if (hashErr) {
                res.status(500).json(hashErr);
              }
              data.newpassword = hash;
              //@change password
              pool.query("UPDATE users SET password=$1 WHERE id=$2", [data.newpassword, id])
                .then((datas) => {
                  if (datas) {
                    return res.json({ success: true, message: "password changed successfully." });
                  }
                  return res.status(500).json({ error: "something wrong try again later." });
                })
                .catch((updErr) => {
                  res.status(500).json(updErr);
                });
            });
          });
        });
    })
    .catch(error => res.status(500).json(error));
};
