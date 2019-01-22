module.exports={
  isAdmin:(req,res,next)=>{
    if (req.user.rows[0].isadmin===true) {
      next();
    }else {
      return res.status(401).json({error:"sorry permission denied."});
    }
  },
  notAdmin:(req,res,next)=>{
    if (req.user.rows[0].isadmin===false) {
      next();
    }else {
      return res.status(401).json({error:"sorry permission denied."});  
    }
  }
}
