const { Restorant_type } = require("../models");

//create Restorant_type
const CreateRestorant_type = async (reqBody) => {
    return Restorant_type.create(reqBody)
};
//Restorant_type list
const Restorant_typeList = async (req, res) => {
    return Restorant_type.find()
};
// Restorant_type id
const Restorant_typeId = async (typeId) => {
    return Restorant_type.findById(typeId)
};
//upadte Restorant_type
const UpdateRestorant_type = async (typeId, updateBody) => {
    return Restorant_type.findByIdAndUpdate(typeId, { $set: updateBody })
};
//delete Restorant_type
const DeleteRestorant_type = async (typeId) => {
    return Restorant_type.findByIdAndDelete(typeId)
};
//find  Restorant_type
const FindRestorant_type = async (type_select) => {
    return Restorant_type.findOne({type_select});
}
//module export
module.exports = {
    CreateRestorant_type,
    Restorant_typeList,
    Restorant_typeId,
    FindRestorant_type,
    DeleteRestorant_type,
    UpdateRestorant_type
}