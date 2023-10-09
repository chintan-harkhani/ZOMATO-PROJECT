const joi = require("joi");
//create Favorite
const CreateFaorite= {
    body:joi.object({
        food : joi.string().trim().required(),
        restorant : joi.string().trim().required(),
        user : joi.string().trim().required(),
    }),
};
//module export
module.exports = {
    CreateFaorite
}