const mongoose = require("mongoose");
// user review model schema defiend
const UserReviewSchema = new mongoose.Schema(
    {
        user : {
             type : mongoose.Types.ObjectId,
             ref : "user",
        },
        restorant:{
            type : mongoose.Types.ObjectId,
            ref  : "restorant",
        },
        ratting : {
             type : Number,
             trim : true,
        },
        review_text :{
             type : String,
             trim : true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const UserReview =    mongoose.model("user_review" , UserReviewSchema);
//module expoart
module.exports = UserReview;

