const { CoupanService } = require("../services");
//create Coupan
const CreateCoupan= async (req, res) => {
    try {
        const reqBody = req.body;
            reqBody.coupancode = Math.floor(Math.random() * 1000000000000);
        const CoupanEX = await CoupanService.FindCoupan(reqBody.coupancode);
        if (CoupanEX) {
            throw new Error("Coupan Code Already This Name Created  => " +CoupanEX.coupancode);
        }
            let Coupan = await CoupanService.CreateCoupan(reqBody);
            if (!Coupan) {
                throw new Error(" Coupan Code Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Coupan Code  Created ..!",
                data: Coupan
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Coupan List
const CoupanList = async (req, res) => {
    try {
        const List = await CoupanService.CoupanList(req, res);
        res.status(200).json({
            success: true,
            message: " Coupan Code List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Coupan Id find
const CoupanId = async (req, res) => {
    try {
        const coupanId = req.params.coupanId;
        const ID = await CoupanService.CoupanId(coupanId);
        if (!ID) {
            throw new Error("Coupan Code  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Coupan Code Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Coupan
const DeleteCoupan = async (req, res) => {
    try {
        const coupanId = req.params.coupanId;
        const ID = await CoupanService.CoupanId(coupanId);
        if (!ID) {
            throw new Error("Coupan Code  Not Found !...");
        };
        await CoupanService.DeleteCoupan(coupanId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Coupan Code Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Coupan
const UpdateCoupan = async (req, res) => {
    try {
        const coupanId = req.params.coupanId;
        const ID = await CoupanService.CoupanId(coupanId);
        if (!ID) {
            throw new Error("Coupan Code  Not Found !...");
        };
        await CoupanService.UpdateCoupan(coupanId, req.body);
        res.status(200).json({
            success: true,
            message: "Coupan Code update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateCoupan,
CoupanList,
CoupanId,
DeleteCoupan,
UpdateCoupan
}