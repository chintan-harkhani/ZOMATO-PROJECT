const mongoose = require("mongoose");
// user favorite model schema defiend
const UserFavoriteSchema = new mongoose.Schema(
    {
         food : {
             type : mongoose.Types.ObjectId,
             ref : "foods"
         },
         restorant : {
            type : mongoose.Types.ObjectId,
            ref : "restorant",
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const UserFavorite = mongoose.model("userfavorite", UserFavoriteSchema);
//module expoart
module.exports = UserFavorite;

