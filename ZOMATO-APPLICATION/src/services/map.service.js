const { Map } = require("../models");
//create  Map
const CreateMap = async (reqBody) => {
    return Map.create(reqBody)
};
//Map list
const MapList = async (req, res) => {
    return Map.find()
};
// Map id
const MapId = async (mapId) => {
    return Map.findById(mapId)
};
//upadte Map
const UpdateMap = async (mapId, updateBody) => {
    return Map.findByIdAndUpdate(mapId, { $set: updateBody })
};
//delete Map
const DeleteMap = async (mapId) => {
    return Map.findByIdAndDelete(mapId)
};
//find  Menu
const FindRes = async (restorant) => {
    return Map.findOne({restorant});
}
//module export
module.exports = {
CreateMap,
MapList,
MapId,
DeleteMap,
UpdateMap,
FindRes
}