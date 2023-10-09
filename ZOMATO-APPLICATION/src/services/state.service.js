const { State } = require("../models");
//create  State
const CreateState = async (reqBody) => {
    return State.create(reqBody)
};
//state list
const StateList = async (req, res) => {
    return State.find().populate({
         path : "country",
         select : ["country_name"],
    })
};
// State id
const StateId = async (stateId) => {
    return State.findById(stateId)
};
//upadte state
const UpdateState = async (stateId, updateBody) => {
    return State.findByIdAndUpdate(stateId, { $set: updateBody })
};
//delete State
const DeleteState = async (stateId) => {
    return State.findByIdAndDelete(stateId)
};
//find State
const FindState = async (state_name) => {
    return State.findOne({ state_name });
}
//module export
module.exports = {
CreateState,
StateList,
StateId,
DeleteState,
UpdateState,
FindState
}