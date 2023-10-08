const { StateController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { StateValidation } = require("../../validations");
const router = express.Router();

//create State
router.post("/create_state",
    validate(StateValidation.CreateState),
  StateController.CreateState
);
//State list
router.get("/State_list",
   StateController.StateList
);
//state id
router.get("/state_list/:stateId",
   StateController.StateId
);
//delete State
router.delete("/delete_state/:stateId",
    StateController.DeleteState
);
//update state
router.put("/update_state/:stateId",
   StateController.UpdateState
);

module.exports = router;