const joi  =require("joi");

//create user notification
const CreateNotification = {
    body :joi.object().keys({
                       user : joi.string().trim().required(),
                       message : joi.string().min(2).max(100).messages({
                        'string.min': 'Notification Is Not Valid..!',
                        'string.max': 'Notification  Is Long Message Not Valid...!',
                      }).required(),
    })
};

//module expoart
module.exports = {
    CreateNotification,
}