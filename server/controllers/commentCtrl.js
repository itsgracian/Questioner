import pool from "../config/connection";
import commentValidation from "../validations/comment";

//@create comment
exports.create = (req, res) => {
  const { errors, isValid } = commentValidation.postComment(req.body);
  //@check for validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  //@initial data
  const data = {
    comment: req.body.comment,
    question: req.params.questionId,
    userId: req.user.rows[0].id
  };
  //@check if question id is available
  pool.query("SELECT * FROM questions WHERE question_id=$1", [data.question])
    .then((question) => {
      //@check
      if (question.rows.length === 0) {
        return res.status(404).json({ error: "sorry question not found." });
      }
      //@create comment
      pool.query("INSERT INTO comments(comment,question,commentedby) VALUES ($1,$2,$3) RETURNING *",
        [data.comment, data.question, data.userId])
        .then((comments) => {
          if (!comments) {
            return res.status(500).json({ error: "something wrong try again." });
          }
          //i just also need to return some info about person who add comment
          pool.query("SELECT * FROM users WHERE id=$1", [comments.rows[0].commentedby])
            .then(user => res.status(200).json({
              success: true,
              message: "comment created successfully.",
              status: comments.rowCount,
              data: comments.rows,
              user: user.rows
            }))
            .catch(userErr => res.status(500).json({ error: userErr }));
        })
        .catch(er => res.status(500).json(er));
    })
    .catch(error => res.status(500).json(error));
};

//@edit comment
exports.edit = (req, res) => {
  const id = req.params.id;
  const userId = req.user.rows[0].id;
  pool.query("SELECT * FROM comments WHERE comment_id=$1 AND commentedby=$2",
    [id, userId])
    .then((comment) => {
      if (comment.rows.length === 0) {
        return res.status(404).json({ error: "the requested resource could not be found." });
      }
      return res.status(201).json({ status: comment.rowCount, data: comment.rows });
    })
    .catch(error => res.status(500).json(error));
};

//@update comment
exports.update = (req, res) => {
  const { errors, isValid } = commentValidation.patchComment(req.body);
  const id = req.params.id;
  const userId = req.user.rows[0].id;
  pool.query("SELECT * FROM comments WHERE comment_id=$1",
    [id])
    .then((comment) => {
      if (comment.rows.length === 0) {
        return res.status(404).json({ error: "the requested resource could not be found." });
      }
      //@check for validation
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //@update comment
      const data = {
        comment: req.body.comment
      };
      pool.query("UPDATE comments SET comment=$1 WHERE comment_id=$2 AND commentedby=$3 RETURNING *",
        [data.comment, id, userId])
        .then((result) => {
          if (!result) {
            return res.status(500).json({ error: "something wrong try again." });
          }
          return res.status(200).json({
            success: true,
            message: "comment updated successfully.",
            status: result.rowCount,
            data: result.rows
          });
        })
        .catch(er => res.status(500).json(er));
    })
    .catch(error => res.status(500).json(error));
};

//@deleteComment
exports.deleteComment = (req, res) => {
  const id = req.params.id;
  const userId = req.user.rows[0].id;
  pool.query("SELECT * FROM comments WHERE comment_id=$1 AND commentedby=$2",
    [id, userId])
    .then((comment) => {
      if (comment.rows.length === 0) {
        return res.status(404).json({ error: "the requested resource could not be found." });
      }
      //@delete query
      pool.query("DELETE FROM comments WHERE comment_id=$1 AND commentedby=$2",
        [id, userId], (er, result) => {
          if (er) {
            console.log(er);
          }
          if (!result) {
            return res.status(500).json({ error: "something wrong try again." });
          }
          return res.json({ success: true, message: "your comment was successfully removed." });
        });
    })
    .catch(error => res.status(500).json(error));
};

exports.allComment = (req, res) => {
  const questionId = req.params.questionId;
  //query
  const sql = "SELECT * FROM comments INNER JOIN users ON users.id=comments.commentedby WHERE question=$1 ORDER BY comment_id ASC";
  const Qsql = "SELECT * FROM questions INNER JOIN users ON users.id=questions.user_id WHERE question_id=$1";
  pool.query(Qsql, [questionId])
    .then((question) => {
      //
      if (question.rows.length === 0) {
        return res.status(404).json({ error: "sorry the requested resource could not be found." });
      }
      pool.query(sql, [questionId])
        .then((data) => {
          //search for question votes
          const voteSql = "SELECT SUM(upvotes) AS totalup, SUM(downvotes) AS totaldown FROM votes WHERE question_id=$1";
          pool.query(voteSql, [questionId])
            .then(total => res.json({
              status: 200, data: data.rows, total: total.rows, question: question.rows
            }))
            .catch((votError) => {
              console.log(votError);
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch((qerror) => {
      console.log(qerror);
    });
};
