const { RestorantService } = require("../services");
//create Restorant
const CreateRestorant= async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.restorant_img = req.file.filename
        } else {
            throw new Error("Restorant Images Is Required....!");
        }
        const restorantEX = await RestorantService.FindRestorantName(reqBody.restorant_name);
        if (restorantEX) {
            throw new Error("Restorant Name Already This Name Created  => " +restorantEX.restorant_name);
        }
            let Restorant = await RestorantService.CreateRestorant(reqBody);
            if (!Restorant) {
                throw new Error(" Restorant Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Restorant Data  Created ..!",
                data: Restorant
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Restorant List
const RestorantList = async (req, res) => {
    try {
        const List = await RestorantService.RestorantList(req, res);
        res.status(200).json({
            success: true,
            message: " Restorant Data List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Restorant Id find
const RestorantId = async (req, res) => {
    try {
        const restorantId = req.params.restorantId;
        const ID = await RestorantService.RestorantId(restorantId);
        if (!ID) {
            throw new Error("Restorant Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Restorant Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Restorant
const DeleteRestorant = async (req, res) => {
    try {
        const restorantId = req.params.restorantId;
        const ID = await RestorantService.RestorantId(restorantId);
        if (!ID) {
            throw new Error("Restorant Name  Not Found !...");
        };
        await RestorantService.DeleteRestorant(restorantId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Restorant Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Restorant
const UpdateRestorant = async (req, res) => {
    try {
        const restorantId = req.params.restorantId;
        const ID = await RestorantService.RestorantId(restorantId);
        if (!ID) {
            throw new Error("Restorant Data  Not Found !...");
        };
        await RestorantService.UpdateRestorant(restorantId, req.body);
        res.status(200).json({
            success: true,
            message: "Restorant Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateRestorant,
RestorantList,
RestorantId,
DeleteRestorant,
UpdateRestorant
}