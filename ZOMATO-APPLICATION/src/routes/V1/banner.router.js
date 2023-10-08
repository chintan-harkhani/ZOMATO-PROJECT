const { BannerController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");
const { BannerValidation } = require("../../validations");
const router = express.Router();

//create Banner
router.post("/create_banner",
upload.single("banner_img"),
validate(BannerValidation.CreateBanner),
  BannerController.CreateBanner
);
//Banner list
router.get("/banner_list",
   BannerController.BannerList
);
//Banner id
router.get("/banner_list/:bannerId",
   BannerController.BannerId
);
//delete Banner
router.delete("/delete_banner/:bannerId",
    BannerController.DeleteBanner
);
//update Banner
router.put("/update_banner/:bannerId",
   BannerController.UpdateBanner
);

module.exports = router;