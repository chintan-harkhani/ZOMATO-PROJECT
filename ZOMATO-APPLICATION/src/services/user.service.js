const  {User} = require("../models");

//create user
const CreateUser = async (reqBody)=>{
       return User.create(reqBody)
};
//user list
const UserList  =async (req ,res) =>{
       return User.find()
};
// user id
const UserId = async ( userId)=>{
     return User.findById(userId)
};
//upadte user
const UpdateUser = async (userId , updateBody)=>{
    return User.findByIdAndUpdate(userId ,{ $set  : updateBody})
};
//delete user
const DeleteUser =async (userId) =>{
     return User.findByIdAndDelete (userId)
};
//find user
const FindEmail =async (email) =>{
      return User.findOne({email});
}
const Findnumber =async (contact_no) =>{
    return User.findOne({contact_no })
}
//module export
module.exports ={
    CreateUser,
    UserList,
    UserId,
    DeleteUser,
    UpdateUser,
    FindEmail,
    Findnumber
}