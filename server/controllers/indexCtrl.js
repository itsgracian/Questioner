import pool from "../config/connection";

//@index
exports.adminIndex = (req, res) => {
  const id = req.user.rows[0].id;
  pool.query("SELECT * FROM meetups ORDER BY meetup_id DESC LIMIT 2")
    .then((result) => {
      pool.query("SELECT * FROM users WHERE id=$1", [id])
        .then((user) => {
          if (user.rows.length === 0) {
            return res.status(404).json({ error: "sorry the requested result could not be found." });
          }
          return res.status(200).json({ meetup: result.rows, currentUser: user.rows[0] });
        })
        .catch(e => res.status(500).json(e));
    })
    .catch((error) => {
      console.log(error);
    });
};
