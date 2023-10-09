const { Deliver_boyService } = require("../services");
//create Deliver_boy
const CreateDeliverboy= async (req, res) => {
    try {
        const reqBody = req.body;
        const DeliverEX = await Deliver_boyService.FindDeliverboyName(reqBody.user);
        if (DeliverEX) {
            throw new Error("DeliverBoy  Already This  Created  => " +DeliverEX.user);
        }
            let Deliverboy = await Deliver_boyService.CreateDeliverboy(reqBody);
            if (!Deliverboy) {
                throw new Error(" Deliverboy Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Deliverboy Data  Created ..!",
                data: Deliverboy
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Deliver_boy List
const DeliverboyList = async (req, res) => {
    try {
        const List = await Deliver_boyService.DeliverboyList(req, res);
        res.status(200).json({
            success: true,
            message: " Deliver_boy Data List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Deliver_boy Id find
const DeliverboyId = async (req, res) => {
    try {
        const DeliverboyId = req.params.boyId;
        const ID = await Deliver_boyService.DeliverboyId(boyId);
        if (!ID) {
            throw new Error("Deliver_boy Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Deliver_boy Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Deliver_boy
const DeleteDeliverboy = async (req, res) => {
    try {
        const DeliverboyId = req.params.boyId;
        const ID = await Deliver_boyService.DeliverboyId(boyId);
        if (!ID) {
            throw new Error("Deliver_boy Data  Not Found !...");
        };
        await Deliver_boyService.DeleteDeliverboy(boyId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Deliver_boy Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Deliver_boy
const UpdateDeliverboy = async (req, res) => {
    try {
        const DeliverboyId = req.params.boyId;
        const ID = await Deliver_boyService.DeliverboyId(boyId);
        if (!ID) {
            throw new Error("Deliver_boy Data  Not Found !...");
        };
        await Deliver_boyService.UpdateDeliverboy(boyId, req.body);
        res.status(200).json({
            success: true,
            message: "Deliver_boy Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateDeliverboy,
DeliverboyList,
DeliverboyId,
DeleteDeliverboy,
UpdateDeliverboy
}