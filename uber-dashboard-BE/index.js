


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import userRoute from './routes/user/users.js';
import authRoute from './routes/auth/auth.js';

const app = express();

dotenv.config();
console.log(process.env.MONGODB_URL, "----")
mongoose.connect(process.env.MONGODB_URL, {}).then(() => {
    console.log("db is connected");
}).catch((e) => {
    console.log("no connection with db");
})

//


mongoose.connect(process.env.MONGODB_URL,{
    
}).then(() => {
    console.log("db is connected");
}).catch((e)=>{
    console.log("no connection with db");
})
//midddleware
app.use(express.json());
app.use(cookieParser());
app.use(cors())


app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)



app.use((req,res,next,err)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message   || "something went wrong"
    // return res.status(errorStatus).json({
    //     success:false,
    //     status:errorStatus,
    //     message:errorMessage,
    //     stack:err.stack,
    // })
})
const port = 8080;
app.listen(8080,()=>{
    console.log("succesfully connected to backend 8080");
})