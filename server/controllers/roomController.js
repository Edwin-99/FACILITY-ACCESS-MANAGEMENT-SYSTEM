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
      const {Memberid}= req.params
    const  room =  await Room.findOne({number:number}) ; 
    if(!room)
           return res.status(404).send({message:'Room does not exist'});
    
   
    room.members.id(Memberid).remove( );

    await room.save() ;

    res.status(200).send({message:'done'});

}

exports.addMember=async(req,res)=>{

    const {number} = req.query  ;
   
  const  room =  await Room.findOne({number:number}) ; 
  if(!room)
         return res.status(404).send({message:'Room does not exist'});


 room.members.push(req.body);

await room.save(); 

 res.status(200).send(room);

}

exports.totalNumber =async(req , res)=>{

       const rooms =  await Room.find({}) ; 
       

        const total = rooms.reduce((value , room ,  i )=>{
            
            return  value += room.members.length ; 
       
       } , 0 )
       console.log(total);

  res.status(200).send({total:54}) ; 

}