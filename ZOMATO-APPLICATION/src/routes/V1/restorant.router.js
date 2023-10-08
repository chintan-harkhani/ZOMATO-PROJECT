const { RestorantController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");
const { RestorantValidation } = require("../../validations");
const router = express.Router();

//create Restorant
router.post("/create_restorant",
upload.single("restorant_img"),
validate(RestorantValidation.CreateRestorant),
  RestorantController.CreateRestorant
);
//Restorant list
router.get("/restorant_list",
   RestorantController.RestorantList
);
//Restorant id
router.get("/restorant_list/:restorantId",
   RestorantController.RestorantId
);
//delete Restorant
router.delete("/delete_restorant/:RestorantId",
    RestorantController.DeleteRestorant
);
//update Restorant
router.put("/update_restorant/:restorantId",
   RestorantController.UpdateRestorant
);

module.exports = router;