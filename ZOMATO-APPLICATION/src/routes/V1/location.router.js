const { LocationController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { LocationValidation } = require("../../validations");
const router = express.Router();

//create Location
router.post("/create_location",
    validate(LocationValidation.CreateLocation),
  LocationController.CreateLocation
);
//Location list
router.get("/location_list",
   LocationController.LocationList
);
//Location id
router.get("/location_list/:locationId",
    LocationController.LocationId
);
//delete Location
router.delete("/delete_location/:locationId",
    LocationController.DeleteLocation
);
//update Location
router.put("/update_location/:locationId",
    LocationController.UpdateLocation
);

module.exports = router;