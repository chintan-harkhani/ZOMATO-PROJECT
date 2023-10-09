const { FavoriteController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const { FavoriteValidation } = require("../../validations");
const router = express.Router();

//create Favorite
router.post("/create_favorite",
    validate(FavoriteValidation.CreateFaorite),
    FavoriteController.CreateFavorite
);
//Favorite list
router.get("/favorite_list",
    FavoriteController.FavoriteList
);
//Favorite id
router.get("/favorite_list/:favoriteId",
    FavoriteController.FavoriteId
);
//delete Favorite
router.delete("/delete_favorite/:favoriteId",
    FavoriteController.DeleteFavorite
);
//update Favorite
router.put("/update_favorite/:favoriteId",
    FavoriteController.UpdateFavorite
);

module.exports = router;