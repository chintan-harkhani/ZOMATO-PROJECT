const { City } = require("../models");

//create City
const CreateCity = async (reqBody) => {
    return City.create(reqBody)
};
//City list
const CityList = async (req, res) => {
    return City.find()
};
// City id
const CityId = async (cityId) => {
    return City.findById(cityId)
};
//upadte City
const UpdateCity = async (cityId, updateBody) => {
    return City.findByIdAndUpdate(cityId, { $set: updateBody })
};
//delete City
const DeleteCity = async (cityId) => {
    return City.findByIdAndDelete(cityId)
};
//find  City
const FindCity = async (city_name) => {
    return City.findOne({city_name});
}
//module export
module.exports = {
    CreateCity,
    CityList,
    CityId,
    FindCity,
    DeleteCity,
    UpdateCity
}