const { ReviewController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")
const { ReviewValidation } = require("../../validations");
const router = express.Router();

//create Review
router.post("/create_review",
    validate(ReviewValidation.CreateReview),
    auth(),
    ReviewController.CreateReview
);
//Review list
router.get("/review_list",
    ReviewController.ReviewList
);
//Review id
router.get("/review_list/:reviewId",
    ReviewController.ReviewId
);
//delete Review
router.delete("/delete_review/:reviewId",
    ReviewController.DeleteReview
);
//update Review
router.put("/update_review/:reviewId",
    ReviewController.UpdateReview
);

module.exports = router;