
exports.isAdmin =  (req , res, next)=>{


console.log(req)
    if(req.user.role!== 'Admin'){

        return res.status(403).json({message:'not an admin'})
    }

    next();
}