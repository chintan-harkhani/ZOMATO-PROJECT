const joi = require("joi");
//create Food Order
const CreateOrder= {
    body:joi.object({
        menu : joi.string().trim().required(),
        food : joi.string().trim().required(),
        order_Date : joi.string().trim().required(),
        orde_total_price : joi.number().integer().min(10).required(),
        driver : joi.string().trim().required(),
        driver_user : joi.string().trim().required(),
        user : joi.string().trim().required(),
    }),
};
//module export
module.exports = {
    CreateOrder
}