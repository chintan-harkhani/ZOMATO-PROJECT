const mongoose = require("mongoose");
// menu model schema defiend
const MenuSchema = new mongoose.Schema(
    {
        menu_img: {
            type: String,
            trim: true
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "foods",
        },
        menu_name: {
            type: String,
            trim: true,
        },
        menu_desc: {
            type: String,
            trim: true,
        },
        menu_price: {
            type: Number,
            trim: true,
        },
        menu_category: {
            type: String,
            trim: true,
        },
        restorant: {
            type: mongoose.Types.ObjectId,
             ref :"restorant",
        },
        type: {
            type: mongoose.Types.ObjectId,
            ref : "restorant_type"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const Menu = mongoose.model("menu", MenuSchema);
//module expoart
module.exports = Menu;
