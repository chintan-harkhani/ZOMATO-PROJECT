const { PaymentController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { PaymentValidation } = require("../../validations");
const router = express.Router();

//create Payment
router.post("/create_payment",
validate(PaymentValidation.CreatePayment),
  PaymentController.CreatePayment
);
//Payment list
router.get("/payment_list",
   PaymentController.PaymentList
);
//Payment id
router.get("/payment_list/:paymentId",
   PaymentController.PaymentId
);
//delete Payment
router.delete("/delete_payment/:paymentId",
    PaymentController.DeletePayment
);
//update Payment
router.put("/update_payment/:paymentId",
   PaymentController.UpdatePayment
);

module.exports = router;