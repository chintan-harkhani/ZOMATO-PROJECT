const joi = require("joi");
//create Map
const CreateMap= {
    body:joi.object({
        restorant : joi.string().trim().required(),
        location : joi.string().trim().required(),
    }),
};
//module export
module.exports = {
    CreateMap
}