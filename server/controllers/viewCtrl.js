import pool from "../config/connection";

exports.index=(req,res)=>{
  res.render('index');
}
//@meetups
exports.meetups=(req,res)=>{
  res.render('meetup');
}
//@questions
exports.questions=(req,res)=>{
  res.render('question');
}
//@comments
exports.comments=(req,res)=>{
  res.render('comment');
}
//@rsvp
exports.rsvp=(req,res)=>{
  res.render('rsvp');
}

exports.try=(req,res)=>{
  pool.query("SELECT * FROM users")
    .then(result=>{
      return res.json({data:result.rows});
    })
    .catch(errors=>{
      console.log(errors);
    })
}
