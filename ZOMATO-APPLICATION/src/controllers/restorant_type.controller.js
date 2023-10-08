const { Restorant_typeService } = require("../services");
//crete Restorant_type
const CreateRestorant_type= async (req, res) => {
    try {
        const reqBody = req.body;
        const TypeEX = await Restorant_typeService.FindRestorant_type(reqBody.type_select);
        if (TypeEX) {
            throw new Error("Restorant_type Name Already This name Created  => " +TypeEX.type_select);
        }
            let Restorant_type = await Restorant_typeService.CreateRestorant_type(reqBody);
            if (!Restorant_type) {
                throw new Error(" Restorant_type Name Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Restorant_type Name  Created ..!",
                data: Restorant_type
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Restorant_type List
const Restorant_typeList = async (req, res) => {
    try {
        const List = await Restorant_typeService.Restorant_typeList(req, res);
        res.status(200).json({
            success: true,
            message: " Restorant_type Name List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Restorant_type Id find
const Restorant_typeId = async (req, res) => {
    try {
        const typeId = req.params.typeId;
        const ID = await Restorant_typeService.Restorant_typeId(typeId);
        if (!ID) {
            throw new Error("Restorant_type Name  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Restorant_type Name Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Restorant_type
const DeleteRestorant_type = async (req, res) => {
    try {
        const typeId = req.params.typeId;
        const ID = await Restorant_typeService.Restorant_typeId(typeId);
        if (!ID) {
            throw new Error("Restorant_type Name  Not Found !...");
        };
        await Restorant_typeService.DeleteRestorant_type(typeId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Restorant_type Name Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Restorant_type
const UpdateRestorant_type = async (req, res) => {
    try {
        const typeId = req.params.typeId;
        const ID = await Restorant_typeService.Restorant_typeId(typeId);
        if (!ID) {
            throw new Error("Restorant_type Name  Not Found !...");
        };
        await Restorant_typeService.UpdateRestorant_type(typeId, req.body);
        res.status(200).json({
            success: true,
            message: "Restorant_type Name update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreateRestorant_type,
Restorant_typeList,
Restorant_typeId,
DeleteRestorant_type,
UpdateRestorant_type
}