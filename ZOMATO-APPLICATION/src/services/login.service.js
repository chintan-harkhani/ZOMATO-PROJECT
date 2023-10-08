const { Login } = require("../models");

//create login
const CreateLogin = async (reqBody) => {
    return Login.create(reqBody)
};
//login list
const LoginList = async (req, res) => {
    return Login.find()
};
// login id
const LoginId = async (loginId) => {
    return Login.findById(loginId)
};
//upadte login
const UpdateLogin = async (loginId, updateBody) => {
    return Login.findByIdAndUpdate(loginId, { $set: updateBody })
};
//delete login
const DeleteLogin = async (loginId) => {
    return Login.findByIdAndDelete(loginId)
};
//find  email
const FindEmail = async (email) => {
    return Login.findOne({ email });
}
//module export
module.exports = {
    CreateLogin,
    LoginList,
    DeleteLogin,
    UpdateLogin,
    LoginId,
    FindEmail,
}