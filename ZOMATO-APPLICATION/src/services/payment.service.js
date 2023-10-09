const  {Payment} = require("../models");

//create Payment
const CreatePayment = async (reqBody)=>{
       return Payment.create(reqBody)
};
//Payment list
const PaymentList  =async (req ,res) =>{
       return Payment.find()
};
// Payment id
const PaymentId = async ( paymentId)=>{
     return Payment.findById(paymentId)
};
//upadte Payment
const UpdatePayment = async (paymentId , updateBody)=>{
    return Payment.findByIdAndUpdate(paymentId ,{ $set  : updateBody})
};
//delete Payment
const DeletePayment =async (paymentId) =>{
     return Payment.findByIdAndDelete (paymentId)
};
//find Payment
const FindOrder =async (order) =>{
      return Payment.findOne({order});
}
//module export
module.exports ={
    CreatePayment,
    PaymentList,
    PaymentId,
    DeletePayment,
    UpdatePayment,
    FindOrder,
}