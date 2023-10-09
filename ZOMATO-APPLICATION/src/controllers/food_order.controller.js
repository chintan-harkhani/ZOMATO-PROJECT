const { FoodOrderService } = require("../services");
//create Food_order
const CreateFoodorder= async (req, res) => {
    try {
        const reqBody = req.body;
        const orderEX = await FoodOrderService.FindFoodorder(reqBody.menu);
        if (orderEX) {
            throw new Error("Food Order Already Create for This Order => " +orderEX.menu);
        }
            let order = await FoodOrderService.CreateFoodorder(reqBody);
            if (!order) {
                throw new Error(" order Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Food order Data  Created ..!",
                data:order
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Food_order List
const FoodorderList = async (req, res) => {
    try {
        const List = await FoodOrderService.FoodorderList(req, res);
        res.status(200).json({
            success: true,
            message: " Food order Data List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Food_order Id find
const FoodOrderId = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const ID = await FoodOrderService.FoodorderId(orderId);
        if (!ID) {
            throw new Error("Food order Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Food order Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Food_order
const DeleteFoodorder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const ID = await FoodOrderService.FoodorderId(orderId);
        if (!ID) {
            throw new Error("Food order Data  Not Found !...");
        };
        await FoodOrderService.DeleteFoodorder(orderId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Food order Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Food_order
const UpdateFoodorder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const ID = await FoodOrderService.FoodorderId(orderId);
        if (!ID) {
            throw new Error("Food order Data  Not Found !...");
        };
        await FoodOrderService.UpdateFoodorder(orderId, req.body);
        res.status(200).json({
            success: true,
            message: "Food order Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateFoodorder,
FoodorderList,
FoodOrderId,
DeleteFoodorder,
UpdateFoodorder
}