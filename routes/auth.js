
const express= require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Auth endpoint");
})
router.get("/register",(req,res)=>{
    res.send("Auth Register endpoint");
})
module.exports= router