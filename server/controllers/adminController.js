const User = require('../models/user.model') ; 

exports.deletePorter = async (req , res, next)=>{
           
     
    const PorterId =  req.params.id ; 
    const porter =  await User.findById(PorterId) ;
 if(porter.role !== 'Porter'){

    return res.status(403).json({message:"Can only delete a porter"}) ; 


 }

    
 await User.findByIdAndDelete(PorterId); 
 res.status(200) ;
 res.send({message:'done'}) ; 
 


} 


exports.AddPorter = async (req , res,next)=>{
console.log(req.user)
    const UserId =  req.params.id ; 
    const user =  await User.findById(UserId) ;
 if(user.role !== 'User'){

    return res.status(403).json({message:"User is already a porter or admin cannot be a porter"}) ; 


 }
console.log(user);
user.set('role' , 'Porter') ;
await user.save();
 res.status(200) ;
 res.send({message:'done' ,  porter:user}) ; 


}