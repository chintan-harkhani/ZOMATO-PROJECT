const joi = require("joi");

/** create state */
const CreateState = {
  body: joi.object().keys({
    state_name :joi.string().trim().regex(/^[a-zA-Z\s]+$/).required().messages({
        'string.pattern.base': 'State name can only letters and spaces'}),
        country : joi.string().trim().required(),
  }),
};
//module expoart
module.exports = {
    CreateState
}