const { CoupanController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { CoupanValidation } = require("../../validations");
const router = express.Router();

//create Coupan
router.post("/create_coupan",
validate(CoupanValidation.CreateCoupan),
  CoupanController.CreateCoupan
);
//Coupan list
router.get("/coupan_list",
   CoupanController.CoupanList
);
//Coupan id
router.get("/coupan_list/:coupanId",
   CoupanController.CoupanId
);
//delete Coupan
router.delete("/delete_coupan/:coupanId",
    CoupanController.DeleteCoupan
);
//update Coupan
router.put("/update_coupan/:coupanId",
   CoupanController.UpdateCoupan
);

module.exports = router;