const { TotalOrderController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { TotalOrderValidation } = require("../../validations");
const router = express.Router();

//create TotalOrder
router.post("/createtotalorder",
validate(TotalOrderValidation.CreateTotalOrder),
  TotalOrderController.CreateTotalOrder
);
//TotalOrder list
router.get("/Totalorderlist",
   TotalOrderController.TotalOrderList
);
//TotalOrder id
router.get("/totalorderlist/:TotalorderId",
   TotalOrderController.TotalOrderId
);
//delete TotalOrder
router.delete("/deletetotalorder/:totalorderId",
    TotalOrderController.DeleteTotalOrder
);
//update TotalOrder
router.put("/updatetotalorder/:totalorderId",
   TotalOrderController.UpdateTotalOrder
);

module.exports = router;