import pool from "../config/connection";

//@upvote
exports.upvote = (req, res) => {
  const id = req.params.questionId;
  pool.query("SELECT * FROM questions WHERE question_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requested result could not be found." });
      }
      //@check if user and question are on the same row
      pool.query("SELECT * FROM votes WHERE users_id=$1 AND question_id=$2",
        [req.user.rows[0].id, id])
        .then((votes) => {
          let upvotes = 0;
          //when downvote and upvote equal to 0
          if (votes.rows.length === 0) {
            upvotes = +1;
            pool.query("INSERT INTO votes(users_id,question_id,upvotes)VALUES($1,$2,$3)",
              [req.user.rows[0].id, id, upvotes])
              .then(up => res.status(200).json({ success: true, message: "voted successfully." }))
              .catch((er) => {
                console.log(er);
              });
          } else if (parseInt(votes.rows[0].upvotes, 10) !== 0) {
            return res.status(400).json({ error: "sorry you are allowed to vote once." });
          } else if (votes.rows[0].downvotes === 0 || votes.rows[0].downvotes === "") {
            upvotes = +1;
            pool.query("INSERT INTO votes(users_id,question_id,upvotes,downvotes)VALUES($1,$2,$3,$4)",
              [req.user.rows[0].id, id, upvotes, 0])
              .then(up => res.status(200).json({ success: true, message: "voted successfully." }))
              .catch((er) => {
                console.log(er);
              });
          } else if (votes.rows[0].downvotes !== "" || votes.rows[0].downvotes !== 0) {
            //when downvote==0 we don't need to go under 0
            //@that's why we we will assign to 0
            //
            const down = parseInt(votes.rows[0].downvotes - 1, 10);
            const up = parseInt(votes.rows[0].upvotes + 1, 10);
            pool.query("UPDATE votes SET users_id=$1,question_id=$2,downvotes=$3,upvotes=$4 WHERE vote_id=$5",
              [req.user.rows[0].id, id, down, up, votes.rows[0].vote_id])
              .then(up => res.status(200).json({ success: true, message: "voted successfully." }))
              .catch((er) => {
                console.log(er);
              });
          } else {
            return false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
};

//@downvote
exports.downvote = (req, res) => {
  const id = req.params.questionId;
  //@check if question is available
  pool.query("SELECT * FROM questions WHERE question_id=$1", [id],
    (error, result) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requested result could not be found." });
      }
      //
      pool.query("SELECT * FROM votes WHERE users_id=$1 AND question_id=$2",
        [req.user.rows[0].id, id])
        .then((votes) => {
          if (votes.rows.length === 0) {
            const down = 1;
            pool.query("INSERT INTO votes(users_id,question_id,downvotes) VALUES ($1,$2,$3)",
              [req.user.rows[0].id, id, down])
              .then(down => res.status(200).json({ success: true, message: "downvoted successfully." }))
              .catch((er) => {
                console.log(er);
              });
          } else if (parseInt(votes.rows[0].downvotes,10)===1) {
            return res.status(400).json({ error: "sorry you are allowed to dowvote once.." });
          } else if (votes.rows[0].upvotes === 0 || votes.rows[0].upvotes === "") {
            const downs = 1;
            pool.query("INSERT INTO votes(users_id,question_id,downvotes)VALUES($1,$2,$3)",
              [req.user.rows[0].id, id, downs])
              .then(up => res.status(200).json({ success: true, message: "Downvoted successfully." }))
              .catch((er) => {
                console.log(er);
              });
          } else if (votes.rows[0].upvotes !== "" || votes.rows[0].upvotes !== 0) {
            //when downvote==0 we don't need to go under 0
            //@that's why we we will assign to 0
            //
            const down = parseInt(votes.rows[0].downvotes + 1, 10);
            const up = parseInt(votes.rows[0].upvotes - 1, 10);
            pool.query("UPDATE votes SET users_id=$1,question_id=$2,downvotes=$3,upvotes=$4 WHERE vote_id=$5",
              [req.user.rows[0].id, id, down, up, votes.rows[0].vote_id])
              .then(up => res.status(200).json({ success: true, message: "Downvoted successfully." }))
              .catch((er) => {
                console.log(er);
              });
          } else {
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
