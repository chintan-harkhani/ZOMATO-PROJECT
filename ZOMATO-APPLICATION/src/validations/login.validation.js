const joi  =require("joi");
//create login
const CreateLogin = {
    body :joi.object().keys({
        email :joi.string().email().trim().required(),
        password :joi.string().min(8).max(30).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]+$')).required(),
        user_role :joi.string().trim().required(),
    })
};
//module expoart
module.exports = {
     CreateLogin,
}