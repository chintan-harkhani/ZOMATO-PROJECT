const joi = require("joi");
//create Food
const CreateFood= {
    body:joi.object({
        food_name : joi.string().min(2).max(20).required(),
        food_desc : joi.string().trim().required(),
        food_offer : joi.number().integer().min(0).max(50).required(),
        food_type : joi.string().trim().required(),
        food_effect : joi.string().valid('Sweet', 'Savory', 'Spicy', 'Bitter', 'Sour').required(),
        food_ratting : joi.number().integer().min(1).max(5).required(),
    }),
};
//module export
module.exports = {
    CreateFood
}