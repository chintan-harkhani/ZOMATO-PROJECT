const { OrderController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { OrderValidation } = require("../../validations");
const router = express.Router();

//create FoodOrder
router.post("/createorder",
validate(OrderValidation.CreateOrder),
  OrderController.CreateFoodorder
);
//FoodOrder list
router.get("/order_list",
   OrderController.FoodorderList
);
//FoodOrder id
router.get("/order_list/:orderId",
   OrderController.FoodOrderId
);
//delete FoodOrder
router.delete("/delete_order/:orderId",
    OrderController.DeleteFoodorder
);
//update FoodOrder
router.put("/update_order/:orderId",
   OrderController.UpdateFoodorder
);

module.exports = router;