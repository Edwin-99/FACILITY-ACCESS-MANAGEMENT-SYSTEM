
exports.isAdmin =  (req , res, next)=>{


console.log(req)
    if(req.user.role!== 'Admin'){

        return res.status(403).json({message:'not an admin'})
    }

    next();
}


exports.isAdminOrPorter =  (req , res, next)=>{



        if(req.user.role === 'User'){
    
          
    return res.status(403).json({message:'not  authorized'});
        
        }
        next();  
    };
