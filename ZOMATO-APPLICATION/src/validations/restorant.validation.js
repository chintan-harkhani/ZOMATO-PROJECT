const joi = require("joi");
//create Restorant
const CreateRestorant = {
    body:joi.object({
        restorant_name : joi.string().trim().required(),
        restorant_img : joi.string().trim().allow(""),
        restorant_desc : joi.string().trim().required(),
        restorant_contact : joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
        restorant_open_time : joi.string().trim().required(),
        restorant_end_time : joi.string().trim().required(),
        restorant_type : joi.string().trim().required(),
        restorant_addres : joi.string().trim().required(),
        city : joi.string().trim().required(),
        state : joi.string().trim().required(),
        country : joi.string().trim().required(),
        user : joi.string().trim().required(),
    }),
};
//module export
module.exports = {
    CreateRestorant
}