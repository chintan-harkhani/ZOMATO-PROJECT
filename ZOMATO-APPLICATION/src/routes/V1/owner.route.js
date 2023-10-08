const { OwnerController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { OwnerValidation } = require("../../validations");
const router = express.Router();

//create Owner
router.post("/create_owner",
    validate(OwnerValidation.CreateOwner),
    OwnerController.CreateOwner
);
//Owner list
router.get("/owner_list",
    OwnerController.OwnerList
);
//Owner id
router.get("/Owner_list/:ownerId",
    OwnerController.OwnerId
);
//delete Owner
router.delete("/delete_owner/:ownerId",
    OwnerController.DeleteOwner
);
//update Owner
router.put("/update_owner/:ownerId",
    OwnerController.UpdateOwner
);

module.exports = router;