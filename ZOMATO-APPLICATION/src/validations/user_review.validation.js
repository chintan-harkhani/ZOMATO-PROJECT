const joi  =require("joi");

//create user Review
const CreateReview = {
    body :joi.object().keys({
                       user : joi.string().trim().required(),
                       restorant : joi.string().trim().required(),
                       ratting :joi.number().integer().min(1).max(5).required(),
                       review_text : joi.string().min(2).max(100).messages({
                        'string.min': 'Review Is Not Valid..!',
                        'string.max': 'Review  Is Long Message Not Valid...!',
                      }).required(),
    })
};

//module expoart
module.exports = {
    CreateReview,
}