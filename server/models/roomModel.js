 const mongoose = require("mongoose");
 const Schema = mongoose.Schema ; 


 const studentSchema =  new Schema({

 name:String ,
 indexNumber:String

 })


 const roomSchema =  new Schema({

          
    number:{
        type:String ,
    required :true ,
    unique:true
    }
 ,

 members :[studentSchema] , 

 key:{
     type:Boolean  ,
     required:true
 },

 })  ;


 
 module.exports =  mongoose.model("room"  , roomSchema);