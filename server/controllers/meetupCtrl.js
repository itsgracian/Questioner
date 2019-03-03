import pgArray from "pg-array";
import pool from "../config/connection";
import meetupValidation from "../validations/meetup";
import tagValidation from "../validations/tags";
//@create
exports.create = (req, res) => {
  const { errors, isValid } = meetupValidation(req.body);
  //@check validations
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  //
  const data = {
    topic: req.body.topic.toLowerCase(),
    location: req.body.location.toLowerCase(),
    happeningOn: new Date(req.body.happeningOn)
  };
  //@inserting data to database
  pool.query("INSERT INTO meetups(topic,location,happening)"
  + "VALUES ($1,$2,$3) RETURNING *", [data.topic, data.location, data.happeningOn],
  (error, result) => {
    if (error) {
      return res.status(400).json(error);
    }
    if (result) {
      return res.status(200).json({
        success: true,
        message: "meetup created successfully.",
        status: result.rowCount,
        data: result.rows
      });
    }
  });
};
//@allMeetup
exports.allMeetup = (req, res) => {
  pool.query("SELECT * FROM meetups ORDER BY meetup_id DESC",
    (error, meetup) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(200).json({ status: meetup.rowCount, data: meetup.rows });
    });
};
//@MeetupQuestions
exports.singleMeetup = (req, res) => {
  const id = req.params.meetup_id;
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [id])
    .then((meetup) => {
      if (meetup.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requestd result could not be found." });
      }
      //@select it question
      pool.query("SELECT * FROM questions WHERE meetup=$1", [id])
        .then(question => res.status(201).json({
          meetup: meetup.rows,
          question: question.rows,
          questionCount: question.rowCount
        }))
        .catch(er => res.status(500).json({ error: "Server Error try again later." }));
    })
    .catch((error) => {
      res.status(500).json({ error: "Server Error try again later." });
    });
};
//@meetup findMeetupById
exports.findMeetupById = (req, res) => {
  const id = req.params.id;
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json({error});
      }
      if (result.rows.length === 0) {
        return res.status(400).json({ error: "the requested result could not be found." });
      }
      return res.status(200).json({ status: result.rowCount, data: result.rows });
    });
};
//@exports upcoming meetup
exports.upcoming = (req, res) => {
  //@date
  const today = new Date();
  pool.query("SELECT * FROM meetups WHERE happening>=$1 ORDER BY happening ASC", [today],
    (error, result) => {
      if (error) {
        return res.status(500).json({error});
      }
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "the requested result could not be found." });
      }
      return res.status(200).json({ status: result.rowCount, data: result.rows });
    });
};

//@deleteMeetup
exports.deleteMeetup = (req, res) => {
  const id = req.params.id;
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (result.rows.length === 0) {
        return res.status(400).json({ error: "whoops! no upcoming meetup." });
      }
      //@delete if it is available
      pool.query("DELETE FROM meetups WHERE meetup_id=$1", [id],
        (er, meetup) => {
          if (er) {
            return res.status(500).json({er});
          }
          if (!meetup) {
            return res.status(500).json({ error: "something wrong try again later" });
          }
          return res.status(200).json({ success: true, message: "meetup removed successfully." });
        });
    });
};

//@updateMeetup
exports.updateMeetup = (req, res) => {
  const id = req.params.id;
  //@validations
  const { errors, isValid } = meetupValidation(req.body);
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json({error});
      }
      if (result.rows.length === 0) {
        return res.status(400).json({ error: "the requested result could not be found." });
      }
      //validation check
      if (!isValid) {
        return res.status(400).json({ errors });
      }
      const data = {
        topic: req.body.topic.toLowerCase(),
        location: req.body.location.toLowerCase(),
        happeningOn: new Date(req.body.happeningOn).toDateString()
      };
      pool.query("UPDATE meetups SET topic=$1,location=$2,happening=$3 WHERE meetup_id=$4",
        [data.topic, data.location, data.happeningOn, id], (er, isUpdated) => {
          if (er) {
            return res.status(500).json({er});
          }
          if (!isUpdated) {
            return res.status(500).json({ error: "something wrong try again later" });
          }
          return res.status(201).json({ success: true, message: "well done! updated successfully." });
        });
    });
};

//@addImage to meetups
exports.addImage = (req, res) => {
  //
  const id = req.params.id;
  //@check if meetup id is available
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json({error});
      }
      if (result.rows.length === 0) {
        return res.status(400).json({ error: "the requested result could not be found." });
      }
      if (!req.files) {
        return res.status(400).json({ error: "images field are required." });
      }
      //@url for images protocol=http or https and host=localhost
      const url = `${req.protocol}://${req.get("host")}`;
      const imageUrl = [];
      const images = req.files;
      images.forEach((image) => {
        imageUrl.push(`${url}/images/${image.filename}`);
      });
      //update
      pool.query("UPDATE meetups SET images=$1 WHERE meetup_id=$2 RETURNING *",
        [pgArray(imageUrl), id], (er, meetup) => {
          if (er) {
            return res.status(500).json({ error: "something wrong try again later." });
          }
          if (!meetup) {
            return res.status(500).json({ error: "something wrong try again later." });
          }
          return res.status(200).json({
            success: true,
            message: "well done! image uploaded successfully.",
            status: meetup.rowCount,
            data: meetup.rows
          });
        });
    });
};

function updateTags(res, tags, id) {
  pool.query("UPDATE meetups SET tags=$1 WHERE meetup_id=$2 RETURNING *",
    [tags, id], (error, meetup) => {
      if (error) {
        console.log(error);
      }
      if (!meetup) {
        return res.status(500).json({ error: "something wrong try again later." });
      }
      return res.json({
        success: true,
        message: "well done! meetup tags recorded successfully.",
        status: meetup.rowCount,
        data: meetup.rows
      });
    });
}
//@addTags
exports.addTags = (req, res) => {
  const id = req.params.id;
  const { errors, isValid } = tagValidation(req.body);
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (result.rows.length === 0) {
        return res.status(400).json({ error: "the requested result could not be found." });
      }
      //@tags initial
      const tags = result.rows[0].tags;
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const data = {
        tags: (req.body.tags) ? req.body.tags.split(",") : ""
      };
        //@when tags is equal to null
      if (tags === null) {
        const newTags = data.tags;
        updateTags(res, newTags, id);
      } else {
        const pushedTags = tags;
        const d = data.tags;
        d.forEach((dt) => {
          pushedTags.push(dt);
        });
        updateTags(res, pushedTags, id);
      }
    });
};

//meetupAskedQuestions
exports.meetupAskedQuestions = (req, res) => {
  const mId = req.params.meetupId;
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [mId])
    .then((meetup) => {
      if (meetup.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requestd result could not be found." });
      }
      //@select it question
      pool.query("SELECT * FROM questions INNER JOIN users ON users.id=questions.user_id WHERE meetup=$1 ORDER BY question_id DESC", [mId])
        .then((question) => {
          if (question.rows.length === 0) {
            return res.status(404).json({ error: "Sorry There is no questions on this meetup." });
          }
          const sql = "SELECT question_id,SUM(upvotes) AS totalup, SUM(downvotes) AS totaldown FROM votes GROUP BY question_id";
          pool.query(sql)
            .then(votes => res.status(201).json({
              meetup: meetup.rows,
              questions: question.rows,
              questionCount: question.rowCount,
              votes: votes.rows
            }))
            .catch((votError) => {
              console.log(votError);
            });
        })
        .catch(er => res.status(500).json({ error: "Server Error try again later." }));
    })
    .catch((error) => {
      res.status(500).json({ error: "Server Error try again later." });
    });
};
