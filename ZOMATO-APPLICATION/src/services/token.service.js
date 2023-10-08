const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");
//create token
const CreateToken = async (reqBody) => {
    let payload = {
        ...reqBody,
        // expire_time: reqBody.expire_time.unix()
    };
    return jwt.sign(payload, config.jwt.secret_key);
};
// save token
const SaveToken = async (reqBody) => {
    return Token.findOneAndUpdate({ user: reqBody.user }, { $set: { ...reqBody }, }, { new: true, upsert: true });
};
//module expoart
module.exports = {
    CreateToken,
    SaveToken
}