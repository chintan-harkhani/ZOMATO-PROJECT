const { Food_order } = require("../models");

//create Food_order
const CreateFoodorder = async (reqBody) => {
    return Food_order.create(reqBody)
};
//Food_order list
const FoodorderList = async (req, res) => {
    return Food_order.find().populate("menu" ,{menu_img:1,menu_name:1,menu_desc:1,menu_price:1}).populate("food",{food_name:1,food_offer:1,food_type:1,food_effect:1,food_ratting:1}).populate("driver", {vechenice_desc:1}).populate("driver_user" ,{user_name:1}).populate("user",{user_name:1})
};
// Food_order id
const FoodorderId = async (orderId) => {
    return Food_order.findById(orderId)
};
//upadte Food_order
const UpdateFoodorder = async (orderId, updateBody) => {
    return Food_order.findByIdAndUpdate(orderId, { $set: updateBody })
};
//delete Food_order
const DeleteFoodorder = async (orderId) => {
    return Food_order.findByIdAndDelete(orderId)
};
//find  Food_order
const FindFoodorder = async (menu) => {
    return Food_order.findOne({menu});
}
//module export
module.exports = {
    CreateFoodorder,
    FoodorderList,
    FoodorderId,
    FindFoodorder,
    DeleteFoodorder,
    UpdateFoodorder
}