const joi = require("joi");
//create Location
const CreateLocation = {
    body: joi.object().keys({
        address: joi.string().trim().required(),
        city: joi.string().trim().required(),
        state: joi.string().trim().required(),
        country: joi.string().trim().required(),
        zipcode: joi.number().integer().min(7 ** 6).max(7 ** 7 - 1).required(),
    })
};
//module expoart
module.exports = {
    CreateLocation,
}  