const { FoodService } = require("../services");
//create Food
const CreateFood= async (req, res) => {
    try {
        const reqBody = req.body;
        const FoodEX = await FoodService.FindFoodName(reqBody.food_name);
        if (FoodEX) {
            throw new Error("Food Name Already This Name Created  => " +FoodEX.food_name);
        }
            let Food = await FoodService.CreateFood(reqBody);
            if (!Food) {
                throw new Error(" Food Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Food Data  Created ..!",
                data: Food
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Food List
const FoodList = async (req, res) => {
    try {
        const List = await FoodService.FoodList(req, res);
        res.status(200).json({
            success: true,
            message: " Food Data List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Food Id find
const FoodId = async (req, res) => {
    try {
        const foodId = req.params.foodId;
        const ID = await FoodService.FoodId(foodId);
        if (!ID) {
            throw new Error("Food Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Food Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Food
const DeleteFood = async (req, res) => {
    try {
        const foodId = req.params.foodId;
        const ID = await FoodService.FoodId(foodId);
        if (!ID) {
            throw new Error("Food Data  Not Found !...");
        };
        await FoodService.DeleteFood(foodId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Food Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Food
const UpdateFood = async (req, res) => {
    try {
        const foodId = req.params.foodId;
        const ID = await FoodService.FoodId(foodId);
        if (!ID) {
            throw new Error("Food Data  Not Found !...");
        };
        await FoodService.UpdateFood(foodId, req.body);
        res.status(200).json({
            success: true,
            message: "Food Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateFood,
FoodList,
FoodId,
DeleteFood,
UpdateFood
}