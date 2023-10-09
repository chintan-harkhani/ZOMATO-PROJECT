const joi = require("joi");
//create Deliver Boy
const CreateDeliverBoy= {
    body:joi.object({
        user : joi.string().trim().required(),
        vacancy_desc : joi.string().min(3).max(100).required(),
    }),
};
//module export
module.exports = {
    CreateDeliverBoy
}