const joi = require("joi");

/** create country */
const CreateRestorant_type= {
  body: joi.object().keys({
    type_select :joi.string().valid(
      'Fast Food',
      'Casual Dining',
      'Fine Dining',
      'Cafe',
      'Bar',
      'Food Truck',
      'Family style',
    ) .required().messages({
      'string.valid': 'Invalid restaurant type',
    }),
  }),
};
//module expoart
module.exports = {
    CreateRestorant_type
}