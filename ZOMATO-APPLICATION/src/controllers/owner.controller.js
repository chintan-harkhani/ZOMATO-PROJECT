const { OwnerService } = require("../services");
//crete Owner
const CreateOwner = async (req, res) => {
    try {
        const reqBody = req.body;
        const email = await OwnerService.FindEmail(reqBody.email);
        if (email) {
            throw new Error("Email Already Created By This " + email.email + "  Email ,Please Create By this  New Email..!");
        }
            let Owner = await OwnerService.CreateOwner(reqBody);
            if (!Owner) {
                throw new Error(" Owner Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Owner Created ..!",
                data: Owner
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Owner List
const OwnerList = async (req, res) => {
    try {
        const List = await OwnerService.OwnerList(req, res);
        res.status(200).json({
            success: true,
            message: " Owner Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Owner Id find
const OwnerId = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const ID = await OwnerService.OwnerId(ownerId);
        if (!ID) {
            throw new Error("Owner Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Owner List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Owner
const DeleteOwner = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const ID = await OwnerService.OwnerId(ownerId);
        if (!ID) {
            throw new Error("Owner Not Found !...");
        };
        await OwnerService.DeleteOwner(ownerId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Owner Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Owner
const UpdateOwner = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const ID = await OwnerService.OwnerId(ownerId);
        if (!ID) {
            throw new Error("Owner Not Found !...");
        };
        await OwnerService.UpdateOwner(ownerId, req.body);
        res.status(200).json({
            success: true,
            message: "Owner Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
    CreateOwner,
    OwnerList,
    OwnerId,
    DeleteOwner,
    UpdateOwner,
}