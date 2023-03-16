const express=require("express");
const app= express();
const mongoose =require("mongoose")
const dotenv=require("dotenv")
const authRoute = require("./routes/auth.js")
const usersRoute = require("./routes/users.js")
const hotelRoute = require("./routes/hotel.js")
const roomRoute = require("./routes/room.js")
dotenv.config()

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://admin:admin1234@xharktank.pzfbqui.mongodb.net/?retryWrites=true&w=majority");
      console.log("connected to database")
    } catch (error) {
      console.error(`Error: ${error.message}`)
      
      process.exit(1)
    }
  }
//if monogodb gets disconnected
 mongoose.connection.on("disconnected",()=>{
  console.log("Mongodb Disconnected");
 })
 //in case of reconnection to mongo db

 mongoose.connection.on("connected",()=>{
  console.log("Mongodb connected");
 })
// middlewares
app.use(express.json())
app.use("/auth",authRoute);
app.use("/users",usersRoute);
app.use("/hotel",hotelRoute);
app.use("/room",roomRoute);
app.use((err,req,res,next)=>{
  return res.status(500).json("Error from developer")
})



app.listen(9000,()=>{
  connectDB()
  console.log("database connected")
    console.log("connected successfully");
})
