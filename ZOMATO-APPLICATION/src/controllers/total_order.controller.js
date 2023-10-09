const { TotalOrderService } = require("../services");
//create Food_order
const CreateTotalOrder= async (req, res) => {
    try {
        const reqBody = req.body;
        const orderEX = await TotalOrderService.Findorder(reqBody.order);
        if (orderEX) {
            throw new Error("Total Order Already Create  => " +orderEX.order);
        }
            let order = await TotalOrderService.CreateTotalorder(reqBody);
            if (!order) {
                throw new Error(" Total Order Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Total order Data  Created ..!",
                data: order
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Food_order List
const TotalOrderList = async (req, res) => {
    try {
        const List = await TotalOrderService.TotalorderList(req, res);
        res.status(200).json({
            success: true,
            message: " Total order Data List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Food_order Id find
const TotalOrderId = async (req, res) => {
    try {
        const totalorderId = req.params.totalorderId;
        const ID = await TotalOrderService.TotalorderId(totalorderId);
        if (!ID) {
            throw new Error("Total order Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Total order Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Food_order
const DeleteTotalOrder = async (req, res) => {
    try {
        const totalorderId = req.params.totalorderId;
        const ID = await TotalOrderService.TotalorderId(totalorderId);
        if (!ID) {
            throw new Error("Total order Data  Not Found !...");
        };
        await TotalOrderService.DeleteTotalorder(totalorderId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Total order Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Food_order
const UpdateTotalOrder = async (req, res) => {
    try {
        const totalorderId = req.params.totalorderId;
        const ID = await TotalOrderService.TotalorderId(totalorderId);
        if (!ID) {
            throw new Error("Total order Data  Not Found !...");
        };
        await TotalOrderService.UpdateTotalorder(totalorderId, req.body);
        res.status(200).json({
            success: true,
            message: "Total order Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateTotalOrder,
TotalOrderList,
TotalOrderId,
DeleteTotalOrder,
UpdateTotalOrder
}