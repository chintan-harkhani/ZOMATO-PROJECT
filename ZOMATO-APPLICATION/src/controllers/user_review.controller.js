const { ReviewService } = require("../services");
//crete user Review
const CreateReview = async (req, res) => {
    try {
        const reqBody = req.body;
        const ReviewEx = await ReviewService.FindRestorant(reqBody.restorant);
        if (ReviewEx) {
            throw new Error("Review Restorant  Already This Restorant Id ReviewCreated  => " +ReviewEx.restorant);
        }
            let Review = await ReviewService.CreateReview(reqBody);
            if (!Review) {
                throw new Error(" Review Message Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Review Data  Created ..!",
                data: Review
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// user Review List
const ReviewList = async (req, res) => {
    try {
        const List = await ReviewService.ReviewList(req, res);
        res.status(200).json({
            success: true,
            message: " Review Message List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// user Review Id find
const ReviewId = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const ID = await ReviewService.ReviewId(reviewId);
        if (!ID) {
            throw new Error("Review Message Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Review Message Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete user Review
const DeleteReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const ID = await ReviewService.ReviewId(reviewId);
        if (!ID) {
            throw new Error("Review Message Not Found !...");
        };
        await ReviewService.DeleteReview(reviewId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Review Message Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update user Review
const UpdateReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const ID = await ReviewService.ReviewId(reviewId);
        if (!ID) {
            throw new Error("Review Message Not Found !...");
        };
        await ReviewService.UpdateReview(reviewId ,req.body);
        res.status(200).json({
            success: true,
            message: "Review Message update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
  CreateReview,
  ReviewList,
  ReviewId,
  DeleteReview,
  UpdateReview
}