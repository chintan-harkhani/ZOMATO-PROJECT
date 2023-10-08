const joi  =require("joi");

//create user
const CreateBanner = {
    body :joi.object().keys({
        banner_img :joi.string().allow(""),
        banner_name :joi.string().min(3).required().messages({
          'string.min': 'Banner name must be at least 2 characters long',
        }),
        banner_desc :joi.string().trim().required(),
          city :joi.string().trim().required(),
    })
};

//module expoart
module.exports = {
     CreateBanner,
}