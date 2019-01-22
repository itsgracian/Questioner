/*const pool = require("../config/connection");
const questionValidation = require("../validations/question");*/
import pool from "../config/connection";
import questionValidation from "../validations/question";
//@create
exports.create = (req, res) => {
  const { errors, isValid } = questionValidation(req.body);
  //@check
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //@find if user is availble
  const userId = req.user.rows[0].id;
  //@find if meetup id is availble
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [req.body.meetup])
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "sorry meetup not found." });
      }
      //@create question according to meetup
      const data = {
        user: userId,
        meetup: result.rows[0].meetup_id,
        title: req.body.title,
        body: req.body.body
      };
      pool.query("INSERT INTO questions(user_id,meetup,title,body) VALUES ($1,$2,$3,$4) RETURNING *",
        [data.user, data.meetup, data.title, data.body], (error, results) => {
          if (error) {
            return res.status(500).json(error);
            //console.log(error);
          }
          if (!results) {
            return res.status(500).json({ error: "something wrong try again." });
          }
          return res.status(200).json({
            success: true,
            message: "well done! your question has been recorded successfully",
            status: results.rowCount,
            data: results.rows
          });
        });
    })
    .catch(er => res.status(500).json(er));
};

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
      let vote = result.rows[0].votes;
      //increment by 1
      vote += 1;
      //@update
      pool.query("UPDATE questions SET votes=$1 WHERE question_id=$2 RETURNING *", [vote, id],
        (er, question) => {
          if (er) {
            console.log(er);
          }
          if (!question) {
            return res.status(500).json({ error: "failed to vote try again." });
          }
          return res.json({
            success: true,
            message: "your vote was recorded successfully.",
            status: question.rowCount,
            data: question.rows
          });
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
      let vote = result.rows[0].votes;
      //@decrease by 1
      //@but i don't want vote to be under minus
      //@ i just want downvote ends to  0 vote
      if (vote !== 0) {
        //@when votes is greater than 0
        //then decrease by 1
        vote -= 1;
        down(res, vote, id);
      } else {
        vote = 0;
        down(res, vote, id);
      }
    });
};

//@function for downvote
function down(res, vote, id) {
  pool.query("UPDATE questions SET votes=$1 WHERE question_id=$2 RETURNING *", [vote, id],
    (err, question) => {
      if (err) {
        return res.status(500).json(err);
      }
      if (!question) {
        return res.status(500).json({ error: "failed to downvote try again." });
      }
      return res.json({
        success: true,
        message: "your request was recorded successfully.",
        status: question.rowCount,
        data: question.rows
      });
    });
}

//@deleteQuestion
exports.deleteQuestion = (req, res) => {
  const id = req.params.questionId;
  const userId = req.user.rows[0].id;
  //@before we delete question
  //@let check if user has asked question
  //so that we can delete what he/she asked
  pool.query("SELECT * FROM questions WHERE user_id=$1 AND question_id=$2",
    [userId, id], (error, result) => {
      //@check for error
      if (error) {
        return res.status(500).json(error);
      }
      //@check for result
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "sorry you did't ask question (you are not allowed to proceed)." });
      }
      //@delete query
      pool.query("DELETE FROM questions WHERE user_id=$1 AND question_id=$2 RETURNING *",
        [userId, id], (err, question) => {
          if (err) {
            return res.status(500).json(err);
          }
          if (!question) {
            return res.status(500).json({ error: "failed to remove your question." });
          }
          return res.json({
            success: true,
            message: "your question was removed successfully.",
            status: question.rowCount,
            data: question.rows
          });
        });
    });
};
