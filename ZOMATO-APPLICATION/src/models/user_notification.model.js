const mongoose = require("mongoose");
// user notification model schema defiend
const UserNotificationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        message: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const notification = mongoose.model("usernotification", UserNotificationSchema);
//module expoart
module.exports = notification;

