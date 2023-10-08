const { StateService } = require("../services");
//crete State
const CreateState = async (req, res) => {
    try {
        const reqBody = req.body;
        const stateEx = await StateService.FindState(reqBody.state_name);
        if (stateEx) {
            throw new Error("State Name Already This name Created  => " +stateEx.state_name);
        }
            let state = await StateService.CreateState(reqBody);
            if (!state) {
                throw new Error(" State Name Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  State Name  Created ..!",
                data: state
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//State List
const StateList = async (req, res) => {
    try {
        const List = await StateService.StateList(req, res);
        res.status(200).json({
            success: true,
            message: " State Name List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//State Id find
const StateId = async (req, res) => {
    try {
        const stateId = req.params.stateId;
        const ID = await StateService.StateId(stateId);
        if (!ID) {
            throw new Error("State Name  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully State Name Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete state
const DeleteState= async (req, res) => {
    try {
        const stateId = req.params.stateId;
        const ID = await StateService.StateId(stateId);
        if (!ID) {
            throw new Error("State Name  Not Found !...");
        };
        await StateService.DeleteState(stateId);
        res.status(200).json({
            success: true,
            message: "Suucessfully State Name Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update State
const UpdateState = async (req, res) => {
    try {
        const stateId = req.params.stateId;
        const ID = await StateService.StateId(stateId);
        if (!ID) {
            throw new Error("State Name  Not Found !...");
        };
        await StateService.UpdateState(stateId, req.body);
        res.status(200).json({
            success: true,
            message: "State Name update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
  CreateState,
  StateList,
  StateId,
  DeleteState,
  UpdateState
}