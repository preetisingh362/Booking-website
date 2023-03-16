const createhotel=async (req,res)=>{
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
}
module.exports=createhotel
// update
 const updatehotel=async (req,res)=>{
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
}
module.exports=updatehotel
//DELETE
 const deletehotel=async (req,res)=>{
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
}
module.exports=deletehotel

//GET ALL HOTELS
 const getAllhotels=async (req,res)=>{
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
}
module.exports=getAllhotels

//GET HOTEL BY ID
const gethotel=async (req,res)=>{
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
}

module.exports=gethotel
