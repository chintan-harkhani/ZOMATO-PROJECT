const { Location } = require("../models");
//create  Location
const CreateLocation = async (reqBody) => {
    return Location.create(reqBody)
};
//Location list
const LocationList = async (req, res) => {
    return Location.find().populate({
        path : "country",
        select : ["country_name"],
    }).populate("state" , {state_name :1}).populate("city" ,{city_name:1})
};
// Location id
const LocationId = async (locationId) => {
    return Location.findById(locationId)
};
//upadte Location
const UpdateLocation = async (locationId, updateBody) => {
    return Location.findByIdAndUpdate(locationId, { $set: updateBody })
};
//delete Location
const DeleteLocation = async (locationId) => {
    return Location.findByIdAndDelete(locationId)
};
//find Location
const FindLocation = async (address) => {
    return Location.findOne({ address });
}
//module export
module.exports = {
CreateLocation,
LocationList,
LocationId,
DeleteLocation,
UpdateLocation,
FindLocation
}