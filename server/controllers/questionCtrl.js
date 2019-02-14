import pool from "../config/connection";
import questionValidation from "../validations/question";
//@create
exports.create = (req, res) => {
  const { errors, isValid } = questionValidation(req.body);
  const meetupId = req.params.meetupId;
  //@check
  if (!isValid) {
    return res.status(400).json({errors});
  }
  //@find if user is availble
  const userId = req.user.rows[0].id;
  //@find if meetup id is availble
  pool.query("SELECT * FROM meetups WHERE meetup_id=$1", [meetupId])
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
          }else{
            //@by default question votes will be 0
            pool.query("INSERT INTO votes(users_id,question_id,upvotes,downvotes) VALUES($1,$2,$3,$4)",
           [data.user,results.rows[0].question_id,1,0])
            .then((votes)=>{
              return res.status(200).json({
                success: true,
                message: "well done! your question was recorded successfully.",
                status: results.rowCount,
                data: results.rows
              });
            })
            .catch((erVot)=>{
              //console.log(erVot);
              return res.status(500).json({ error: "something wrong try again." });
            })
          }
        });
    })
    .catch(er => res.status(500).json({error:er}));
};

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

exports.myquestions = (req, res) => {
  //@find questions according to someone's questions
  const userId = req.user.rows[0].id;
  //query
  pool.query("SELECT * FROM questions INNER JOIN users ON users.id=questions.user_id WHERE user_id=$1", [userId])
    .then((data) => {
      if (data.rows.length === 0) {
        return res.status(404).json({ error: "Sorry You didn't ask anything." });
      }
      return res.json({ status: 200, data: data.rows });
    })
    .catch(error => res.status(500).json(error));
};
