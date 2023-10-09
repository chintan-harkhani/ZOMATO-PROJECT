const { Restorant } = require("../models");

//create Restorant
const CreateRestorant = async (reqBody) => {
    return Restorant.create(reqBody)
};
//Restorant list
const RestorantList = async (req, res) => {
    return Restorant.find().populate("restorant_type", {type_select:1}).populate("city", {city_name:1}).populate("state", {state_name:1}).populate("country" ,{country_name:1}).populate("user", {user_name:1,email:1, contact_no:1 })
};
// Restorant id
const RestorantId = async (restorantId) => {
    return Restorant.findById(restorantId)
};
//upadte Restorant
const UpdateRestorant = async (restorantId, updateBody) => {
    return Restorant.findByIdAndUpdate(restorantId, { $set: updateBody })
};
//delete Restorant
const DeleteRestorant = async (restorantId) => {
    return Restorant.findByIdAndDelete(restorantId)
};
//find  Restorant
const FindRestorantName = async (restorant_name) => {
    return Restorant.findOne({restorant_name});
}
//module export
module.exports = {
    CreateRestorant,
    RestorantList,
    RestorantId,
    FindRestorantName,
    DeleteRestorant,
    UpdateRestorant
}