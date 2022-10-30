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
    }
 ,

 members :[studentSchema] , 


 })


 
 module.exports =  mongoose.model("room"  , roomSchema);