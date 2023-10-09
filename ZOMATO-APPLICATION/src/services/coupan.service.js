const  {Coupan} = require("../models");

//create Coupan
const CreateCoupan = async (reqBody)=>{
       return Coupan.create(reqBody)
};
//Coupan list
const CoupanList  =async (req ,res) =>{
       return Coupan.find()
};
// Coupan id
const CoupanId = async ( coupanId)=>{
     return Coupan.findById(coupanId)
};
//upadte Coupan
const UpdateCoupan = async (coupanId , updateBody)=>{
    return Coupan.findByIdAndUpdate(coupanId ,{ $set  : updateBody})
};
//delete Coupan
const DeleteCoupan =async (coupanId) =>{
     return Coupan.findByIdAndDelete (coupanId)
};
//find Coupan
const FindCoupan =async (coupancode) =>{
      return Coupan.findOne({coupancode});
}
//module export
module.exports ={
    CreateCoupan,
    CoupanList,
    CoupanId,
    DeleteCoupan,
    UpdateCoupan,
    FindCoupan,
}