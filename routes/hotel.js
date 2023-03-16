const express= require("express");
const { createhotel, updatehotel } = require("../controllers/hotelscontroller.js");
const Hotel=require("../models/Hotels.js")


const router=express.Router();
//create
router.post("/",async (req,res)=>{
    const newHotel=new Hotel(req.body)
    try{
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch(err){
        const errStatus=err.status || 500
        const errMsg=err.message || "Something went wrong"
        res.status(errStatus).json({
            success:false,
            status:errStatus,
            message:errMsg,
            stack:err.stack

        })
    }
    })

    
    

//UPDATE
router.put("/:id",async (req,res)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updatedHotel)
    }
    catch(err){
        const errStatus=err.status || 500
        const errMsg=err.message || "Something went wrong"
        res.status(errStatus).json({
            success:false,
            status:errStatus,
            message:errMsg,
            stack:err.stack

        })
    }
})


//DELETE
router.delete("/:id",async (req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel no longer exists here" )
    }
    catch(err){
        const errStatus=err.status || 500
        const errMsg=err.message || "Something went wrong"
        res.status(errStatus).json({
            success:false,
            status:errStatus,
            message:errMsg,
            stack:err.stack

        })
    }
})

//GET
router.get("/:id",async (req,res)=>{
    try{
        const hotel= await Hotel.findById(req.params.id)
        
        res.status(200).json(hotel)
    }
    catch(err){
        const errStatus=err.status || 500
        const errMsg=err.message || "Something went wrong"
        res.status(errStatus).json({
            success:false,
            status:errStatus,
            message:errMsg,
            stack:err.stack

        })
    }
})
//GET ALL
router.get("/",async (req,res)=>{
    try{
        const hotels=await Hotel.find(req.params.body)
        res.status(200).json(hotels)
    }
    catch(err){
        const errStatus=err.status || 500
        const errMsg=err.message || "Something went wrong"
        res.status(errStatus).json({
            success:false,
            status:errStatus,
            message:errMsg,
            stack:err.stack

        })
    }
})
module.exports= router