const { Deliver_boyController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { DeliverBoyValidation } = require("../../validations");
const router = express.Router();

//create Deliver_boy
router.post("/createdeliverboy",
validate(DeliverBoyValidation.CreateDeliverBoy),
  Deliver_boyController.CreateDeliverboy
);
//Deliver_boy list
router.get("/deliverboylist",
   Deliver_boyController.DeliverboyList
);
//Deliver_boy id
router.get("/deliverboylist/:boyId",
   Deliver_boyController.DeliverboyId
);
//delete Deliver_boy
router.delete("/deletedeliverboy/:boyId",
    Deliver_boyController.DeleteDeliverboy
);
//update Deliver_boy
router.put("/updatedeliverboy/:boyId",
   Deliver_boyController.UpdateDeliverboy
);

module.exports = router;