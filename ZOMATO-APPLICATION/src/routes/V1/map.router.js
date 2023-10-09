const { MapController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { MapValidation } = require("../../validations");
const router = express.Router();

//create Map
router.post("/create_map",
    validate(MapValidation.CreateMap),
  MapController.CreateMap
);
//Map list
router.get("/map_list",
   MapController.MapList
);
//Map id
router.get("/map_list/:mapId",
    MapController.MapId
);
//delete Map
router.delete("/delete_map/:mapId",
    MapController.DeleteMap
);
//update Map
router.put("/update_map/:mapId",
    MapController.UpdateMap
);

module.exports = router;