const bcrypt = require("bcryptjs");
const userValidation = require("../../validations/register");
const pool = require("../../config/connection");
//@methods
module.exports = {
  signup: (req, res) => {
    const { errors, isValid } = userValidation(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    pool.query("SELECT * FROM users WHERE email=$1", [req.body.email])
      .then((result) => {
        if (result.rows.length === 0) {
          pool.query("SELECT * FROM users WHERE username=$1", [req.body.username.toLowerCase()])
            .then((username) => {
              if (username.rows.length === 0) {
              //@newUser initialization
                const newUser = {
                  firstname: req.body.firstname.toLowerCase(),
                  lastname: req.body.lastname.toLowerCase(),
                  username: req.body.username.toLowerCase(),
                  othername: (req.body.othername) ? req.body.othername.toLowerCase() : "",
                  email: req.body.email,
                  password: req.body.password,
                  phoneNumber: req.body.phoneNumber,
                  isadmin:(req.body.isadmin) ? req.body.isadmin: false
                };
                //hash password
                bcrypt.genSalt(10, (err, salt) => {
                  if (err) res.status(400).json(err);
                  //@hash
                  bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
                    if (hashErr) res.status(400).json(hashErr);
                    newUser.password = hash;
                    //@save it to database
                    pool.query("INSERT INTO users(firstname,lastname,username,othername,email,password,phoneNumber,isadmin)"
                     + "VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
                    [newUser.firstname, newUser.lastname, newUser.username, newUser.othername,
                      newUser.email, newUser.password, newUser.phoneNumber,newUser.isadmin])
                      .then((saved) => {
                        if (saved) {
                          return res.json({ success: true, message: "well done! thank your for signup", user: newUser });
                        }
                        return res.status(500).json({ error: "something wrong try again." });
                      })
                      .catch(e => res.status(400).json(e));
                  });
                });
              } else {
                return res.status(400).json({ error: "username already exist." });
              }
            })
            .catch(usernameErr => res.status(404).json(usernameErr));
        } else {
          return res.status(400).json({ error: "email already exist." });
        }
      })
      .catch(er => res.status(400).json(er));
  }
};
