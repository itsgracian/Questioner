import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config/keys";
import userValidation from "../../validations/login";
import pool from "../../config/connection";

module.exports = {
  signin: (req, res) => {
    const { errors, isValid } = userValidation(req.body);
    if (!isValid) {
      return res.status(400).json({errors});
    }
    //@login check
    pool.query("SELECT * FROM users WHERE email=$1", [req.body.email])
      .then((user) => {
        if (user.rows.length !== 0) {
          //@bcrypt
          bcrypt.compare(req.body.password, user.rows[0].password, (er, isMatch) => {
            if (er) {
              return res.status(500).json(er);
            }
            if (!isMatch) {
              return res.status(400).json({ error: "Whoops Authentication failed." });
            }
            const payload = {
              id: user.rows[0].id,
              firstname: user.rows[0].firstname,
              lastname: user.rows[0].lastname,
              username: user.rows[0].username,
              phoneNumber: user.rows[0].phonenumber,
              email: user.rows[0].email,
              isadmin: user.rows[0].isadmin,
              avatar:user.rows[0].avatar
            };
            //@create jwt
            //25200=7hor 10h
            jwt.sign(payload, config.secretOrKey, { expiresIn: 25200 }, (err, token) => {
              //
              if (err) return res.status(400).json(err);

              return res.json({
                success: true,
                token: `Bearer ${token}`,
                user: payload
              });
            });
          });
        } else {
          return res.status(404).json({ error:"Whoops Authentication failed." });
        }
        //pool.end();
      })
      .catch(error => {
        console.log(error);
      });
  }
};
