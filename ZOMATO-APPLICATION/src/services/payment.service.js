const  {Payment} = require("../models");

//create Payment
const CreatePayment = async (reqBody)=>{
       return Payment.create(reqBody)
};
//Payment list
const PaymentList  =async (req ,res) =>{
       return Payment.find().populate("order",{orde_total_price:1,order_Date:1}).populate("menu", {menu_img:1,menu_name:1,menu_price:1})
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