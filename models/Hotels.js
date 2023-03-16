const mongoose=require("mongoose")
const {Schema}=mongoose
const HotelSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    rooms:{
        type:[String],
        require:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    }, 
    desc:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    photos:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        require:true
    }
    ,
    featured:{
        type:Number,
        require:true
    }
})
const Hotel=mongoose.model("Hotel",HotelSchema)
module.exports=Hotel