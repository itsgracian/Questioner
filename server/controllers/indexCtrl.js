import pool from "../config/connection";

//@index
exports.adminIndex=(req,res)=>{
  pool.query("SELECT * FROM meetups ORDER BY meetup_id DESC LIMIT 2")
   .then((result)=>{
     return res.status(200).json({meetup:result.rows});
   })
   .catch(error=>{
     console.log(error);
   })
}
