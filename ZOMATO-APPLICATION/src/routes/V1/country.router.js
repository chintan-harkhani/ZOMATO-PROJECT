const { CountryController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { CountryValidation } = require("../../validations");
const router = express.Router();

//create country
router.post("/create_country",
    validate(CountryValidation.CreateCountry),
  CountryController.CreateCountry
);
//country list
router.get("/country_list",
   CountryController.CountryList
);
//country id
router.get("/country_list/:countryId",
   CountryController.CountryId
);
//delete country
router.delete("/delete_country/:countryId",
    CountryController.DeleteCountry
);
//update country
router.put("/update_country/:countryId",
   CountryController.UpdateCountry
);

module.exports = router;