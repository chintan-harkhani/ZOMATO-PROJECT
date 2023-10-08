const { Restorant_typeController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { Restorant_typeValidation } = require("../../validations");
const router = express.Router();

//create Restorant_type
router.post("/create_restorant_type",
    validate(Restorant_typeValidation.CreateRestorant_type),
  Restorant_typeController.CreateRestorant_type
);
//Restorant_type list
router.get("/restorant_type_list",
   Restorant_typeController.Restorant_typeList
);
//Restorant_type id
router.get("/restorant_type_list/:typeId",
   Restorant_typeController.Restorant_typeId
);
//delete Restorant_type
router.delete("/delete_restorant_type/:typeId",
    Restorant_typeController.DeleteRestorant_type
);
//update Restorant_type
router.put("/update_restorant_type/:typeId",
   Restorant_typeController.UpdateRestorant_type
);

module.exports = router;