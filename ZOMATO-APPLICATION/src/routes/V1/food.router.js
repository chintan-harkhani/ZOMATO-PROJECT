const { FoodController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { FoodValidation } = require("../../validations");
const router = express.Router();

//create Food
router.post("/create_food",
validate(FoodValidation.CreateFood),
  FoodController.CreateFood
);
//Food list
router.get("/food_list",
   FoodController.FoodList
);
//Food id
router.get("/food_list/:foodId",
   FoodController.FoodId
);
//delete Food
router.delete("/delete_food/:foodId",
    FoodController.DeleteFood
);
//update Food
router.put("/update_food/:foodId",
   FoodController.UpdateFood
);

module.exports = router;