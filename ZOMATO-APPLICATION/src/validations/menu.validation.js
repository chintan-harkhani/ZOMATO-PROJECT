const joi = require("joi");
//create Food
const CreateMenu= {
    body:joi.object({
        menu_img : joi.string().trim().allow(""),
        food : joi.string().trim().required(),
        menu_name : joi.string().min(2).max(20).required(),
        menu_desc : joi.string().trim().required(),
        menu_price : joi.number().integer().required(),
        restorant   : joi.string().trim().required(),
        type : joi.string().trim().required(),
    }),
};
//module export
module.exports = {
    CreateMenu
}