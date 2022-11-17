const Room =  require('../models/roomModel');



exports.getAllRooms = async(req , res)=>{
 
     if(req.query.number){
             
        const {number} = req.query ; 
         const  room =  await Room.findOne({number:number}) ; 
         if(!room)
                return res.status(404).send({message:'Room does not exist'});

        
        return res.status(200).send({room}) ; 


         

     }
    
return res.status(200).send({rooms:await Room.find()});
       

}



exports.getMembers = async (req,res)=>{
  
    const {number} = req.query  ;
      
    const  room =  await Room.findOne({number:number}) ; 
    if(!room)
           return res.status(404).send({message:'Room does not exist'});

   
   return res.status(200).send({room:room.members}) ; 



 
    

} 

exports.deleteMember = async (req,res)=>{
    const {number} = req.query  ;
      const {Membersid}= req.params
    const  room =  await Room.findOne({number:number}) ; 
    if(!room)
           return res.status(404).send({message:'Room does not exist'});
    
   
    room.members.id(Membersid).remove( );

    await room.save() ;

    res.status(200).send({msg:'done'});

}

exports.addMember=async(req,res)=>{

    const {number} = req.query  ;
   
  const  room =  await Room.findOne({number:number}) ; 
  if(!room)
         return res.status(404).send({msg:'Room does not exist'});

         if(room.members.length === 4)
         return res.status(403).send({msg:'Room is full'});    

 room.members.push(req.body);

await room.save(); 

 res.status(200).send({room , msg:"done"});

}

exports.totalNumber =async(req , res)=>{

       const rooms =  await Room.find({}) ; 
       

        const total = rooms.reduce((value , room ,  i )=>{
            
            return  value += room.members.length ; 
       
       } , 0 )
       console.log(total);

  res.status(200).send({total:54}) ; 

}