const joi  =require("joi");

//create Coupan
const CreateCoupan = {
    body :joi.object().keys({
        coupancode :joi.string().trim(),
        discount :joi.number().integer().min(5).max(80).required(),
        expire_date :joi.string().trim().required(),
    })
};

//module expoart
module.exports = {
     CreateCoupan,
}