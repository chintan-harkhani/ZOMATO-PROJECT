const joi = require("joi");

/** create city */
const CreateCity = {
    body: joi.object().keys({
        city_name: joi.string().trim().regex(/^[a-zA-Z\s]+$/).required().messages({
            'string.pattern.base': 'City name can only letters and spaces'}),
        state: joi.string().required().trim(),
        country: joi.string().required().trim(),
    }),
};

module.exports = {
    CreateCity
}