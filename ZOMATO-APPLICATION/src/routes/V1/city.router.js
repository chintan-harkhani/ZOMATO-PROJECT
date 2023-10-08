const { CityController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { CityValidation } = require("../../validations");
const router = express.Router();

//create City
router.post("/create_city",
    validate(CityValidation.CreateCity),
  CityController.CreateCity
);
//City list
router.get("/city_list",
   CityController.CityList
);
//City id
router.get("/city_list/:cityId",
   CityController.CityId
);
//delete City
router.delete("/delete_city/:cityId",
    CityController.DeleteCity
);
//update City
router.put("/update_city/:cityId",
   CityController.UpdateCity
);

module.exports = router;