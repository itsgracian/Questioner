import pool from "../config/connection";
import rsValidation from "../validations/response";

exports.respond = (req, res) => {
  const userId = req.user.rows[0].id;
  const meetupId = req.params.meetupId;

  //@find if meetup is available
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [meetupId])
    .then((meet) => {
      if (meet.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requested resource(meetup) could not be found." });
      }
      //@validations
      const { errors, isValid } = rsValidation(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //@insert data into rsvp table
      pool.query("INSERT INTO rsvp(user_id,meetup,response) VALUES ($1,$2,$3) returning *",
        [userId, meetupId, req.body.respond])
        .then((data) => {
          if (!data) {
            return res.status(500).json({ success: false, message: "sorry something wrong try again." });
          }
          return res.json({ success: true, status: 200, data: data.rows });
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(errors => res.status(500).json({errors}));
};
