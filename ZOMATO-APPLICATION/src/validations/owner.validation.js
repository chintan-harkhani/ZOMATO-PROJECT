const joi  =require("joi");

//create Owner
const CreateOwner = {
    body :joi.object().keys({
        owner_name : joi.string().min(3).max(30) .required(),
        email :joi.string().email().trim().required(),
        contact_no :joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
        restorant  : joi.string().trim().required(),
    })
};

//module expoart
module.exports = {
     CreateOwner,
}