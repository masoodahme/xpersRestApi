const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const expdentitureSchema=new Schema({
  amount:{
      type:Number,
      required:true
  },
  description:{
      type:String,
      required:true
  }
});

module.exports=mongoose.model("expenditure", expdentitureSchema);