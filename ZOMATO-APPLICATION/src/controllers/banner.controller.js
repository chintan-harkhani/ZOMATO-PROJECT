const { BannerService } = require("../services");
//create Banner
const CreateBanner= async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.banner_img = req.file.filename
        } else {
            throw new Error("Banner Images Is Required....!");
        }
        const BannerEx = await BannerService.FindBannerName(reqBody.banner_name);
        if (BannerEx) {
            throw new Error("Banner Name Already This name  Created => " +BannerEx.banner_name);
        }
            let Banner = await BannerService.CreateBanner(reqBody);
            if (!Banner) {
                throw new Error(" Banner Data Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Banner Data  Created ..!",
                data: Banner
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Banner List
const BannerList = async (req, res) => {
    try {
        const List = await BannerService.BannerList(req, res);
        res.status(200).json({
            success: true,
            message: " Banner Data  List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Banner Id find
const BannerId = async (req, res) => {
    try {
        const bannerId = req.params.bannerId;
        const ID = await BannerService.BannerId(bannerId);
        if (!ID) {
            throw new Error("Banner Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Banner Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Banner
const DeleteBanner = async (req, res) => {
    try {
        const bannerId = req.params.bannerId;
        const ID = await BannerService.BannerId(bannerId);
        if (!ID) {
            throw new Error("Banner Data  Not Found !...");
        };
        await BannerService.DeleteBanner(bannerId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Banner Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Banner
const UpdateBanner = async (req, res) => {
    try {
        const bannerId = req.params.bannerId;
        const ID = await BannerService.BannerId(bannerId);
        if (!ID) {
            throw new Error("Banner Data  Not Found !...");
        };
        await BannerService.UpdateBanner(bannerId, req.body);
        res.status(200).json({
            success: true,
            message: "Banner Data  update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
CreateBanner,
BannerList,
BannerId,
DeleteBanner,
UpdateBanner
}