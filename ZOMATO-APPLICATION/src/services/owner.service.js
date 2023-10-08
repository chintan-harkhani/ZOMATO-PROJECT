const  {Owner} = require("../models");

//create Owner
const CreateOwner = async (reqBody)=>{
       return Owner.create(reqBody)
};
//Owner list
const OwnerList  =async (req ,res) =>{
       return Owner.find()
};
// Owner id
const OwnerId = async ( ownerId)=>{
     return Owner.findById(ownerId)
};
//upadte Owner
const UpdateOwner = async (ownerId , updateBody)=>{
    return Owner.findByIdAndUpdate(ownerId ,{ $set  : updateBody})
};
//delete Owner
const DeleteOwner =async (ownerId) =>{
     return Owner.findByIdAndDelete (ownerId)
};
//find Owner
const FindEmail =async (email) =>{
      return Owner.findOne({email});
}
//module export
module.exports ={
    CreateOwner,
    OwnerList,
    OwnerId,
    DeleteOwner,
    UpdateOwner,
    FindEmail,
}