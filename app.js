require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app=express();
//form parser middleware
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true})
.then(()=>{
    console.log("Database connected successfully");
})
//routes
const expendRoutes=require("./routes/expendsRoutes");
//middleware
app.use(bodyParser.json());
//routes middleware
app.use("/api",expendRoutes);

app.listen(3000,()=>{
    console.log("server is starting...");
})