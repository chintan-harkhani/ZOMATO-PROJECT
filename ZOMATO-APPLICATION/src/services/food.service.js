const { Food } = require("../models");

//create Food
const CreateFood = async (reqBody) => {
    return Food.create(reqBody)
};
//Food list
const FoodList = async (req, res) => {
    return Food.find()
};
// Food id
const FoodId = async (foodId) => {
    return Food.findById(foodId)
};
//upadte Food
const UpdateFood = async (foodId, updateBody) => {
    return Food.findByIdAndUpdate(foodId, { $set: updateBody })
};
//delete Food
const DeleteFood = async (foodId) => {
    return Food.findByIdAndDelete(foodId)
};
//find  Food
const FindFoodName = async (food_name) => {
    return Food.findOne({food_name});
}
//module export
module.exports = {
    CreateFood,
    FoodList,
    FoodId,
    FindFoodName,
    DeleteFood,
    UpdateFood
}