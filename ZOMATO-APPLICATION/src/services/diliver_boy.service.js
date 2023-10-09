const { Deliver_boy } = require("../models");

//create Deliver_boy
const CreateDeliverboy = async (reqBody) => {
    return Deliver_boy.create(reqBody)
};
//Deliver_boy list
const DeliverboyList = async (req, res) => {
    return Deliver_boy.find()
};
// Deliver_boy id
const DeliverboyId = async (boyId) => {
    return Deliver_boy.findById(boyId)
};
//upadte Deliver_boy
const UpdateDeliverboy = async (boyId, updateBody) => {
    return Deliver_boy.findByIdAndUpdate(boyId, { $set: updateBody })
};
//delete Deliver_boy
const DeleteDeliverboy = async (DeliverboyId) => {
    return Deliver_boy.findByIdAndDelete(DeliverboyId)
};
//find  Deliver_boy
const FindDeliverboyName = async (user) => {
    return Deliver_boy.findOne({user});
}
//module export
module.exports = {
    CreateDeliverboy,
    DeliverboyList,
    DeliverboyId,
    FindDeliverboyName,
    DeleteDeliverboy,
    UpdateDeliverboy
}