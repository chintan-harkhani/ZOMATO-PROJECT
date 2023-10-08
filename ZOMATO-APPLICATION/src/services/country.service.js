const { Country } = require("../models");

//create country
const CreateCountry = async (reqBody) => {
    return Country.create(reqBody)
};
//Country list
const CountryList = async (req, res) => {
    return Country.find()
};
// Country id
const CountryId = async (countryId) => {
    return Country.findById(countryId)
};
//upadte Country
const UpdateCountry = async (countryId, updateBody) => {
    return Country.findByIdAndUpdate(countryId, { $set: updateBody })
};
//delete Country
const DeleteCountry = async (countryId) => {
    return Country.findByIdAndDelete(countryId)
};
//find  Country
const FindCountry = async (country_name) => {
    return Country.findOne({ country_name });
}
//module export
module.exports = {
 CreateCountry,
 CountryList,
 CountryId,
 FindCountry,
 DeleteCountry,
 UpdateCountry
}