const { Banner } = require("../models");

//create Banner
const CreateBanner = async (reqBody) => {
    return Banner.create(reqBody)
};
//Banner list
const BannerList = async (req, res) => {
    return Banner.find()
};
// Banner id
const BannerId = async (bannerId) => {
    return Banner.findById(bannerId)
};
//upadte Banner
const UpdateBanner = async (bannerId, updateBody) => {
    return Banner.findByIdAndUpdate(bannerId, { $set: updateBody })
};
//delete Banner
const DeleteBanner = async (bannerId) => {
    return Banner.findByIdAndDelete(bannerId)
};
//find  Banner
const FindBannerName = async (banner_name) => {
    return Banner.findOne({banner_name});
}
//module export
module.exports = {
    CreateBanner,
    BannerList,
    BannerId,
    FindBannerName,
    DeleteBanner,
    UpdateBanner
}