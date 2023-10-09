const joi = require("joi");
//create Food
const CreateTotalOrder = {
    body: joi.object({
        order: joi.string().trim().required(),
        menu: joi.string().trim().required(),
        quantity: joi.number().integer().min(1).max(5).required(),
        total_price: joi.number().integer().min(10).required(),
    }),
};
//module export
module.exports = {
    CreateTotalOrder
}