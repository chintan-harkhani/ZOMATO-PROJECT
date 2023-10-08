const joi = require("joi");

/** create country */
const CreateCountry = {
  body: joi.object().keys({
    country_name :joi.string().trim()
    .valid(
        'Algeria',
        'Argentina',
        'Australia',
        'Brazil',
        'Canada',
        'India',
        'Russia',
        'United States of America',
      'United Kingdom',
    ).required()
  }),
};
//module expoart
module.exports = {
    CreateCountry
}