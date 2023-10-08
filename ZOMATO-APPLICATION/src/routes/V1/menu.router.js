const { MenuController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");
const { MenuValidation } = require("../../validations");
const router = express.Router();

//create Menu
router.post("/create_menu",
upload.single("menu_img"),
validate(MenuValidation.CreateMenu),
  MenuController.CreateMenu
);
//Menu list
router.get("/menu_list",
   MenuController.MenuList
);
//Menu id
router.get("/menu_list/:menuId",
   MenuController.MenuId
);
//delete Menu
router.delete("/delete_menu/:menuId",
    MenuController.DeleteMenu
);
//update Menu
router.put("/update_menu/:menuId",
   MenuController.UpdateMenu
);

module.exports = router;