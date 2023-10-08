const joi  =require("joi");

//create user
const CreateUser = {
    body :joi.object().keys({
        user_name : joi.string().min(3).max(30) .required(),
        email :joi.string().email().trim().required(),
        password :joi.string().min(8).max(30).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]+$')).required(),
        contact_no :joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
        address  : joi.string().trim().required(),
        user_role  : joi.string().trim().required(),
    })
};

//module expoart
module.exports = {
     CreateUser,
}