import express from "express";
const router=express.Router();


//@this router works for  API Reference
router.get("/",(req,res)=>{
  res.render("index");
});

module.exports=router;
