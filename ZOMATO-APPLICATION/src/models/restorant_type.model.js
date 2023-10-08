const mongoose = require("mongoose");
// restorant type  model schema defiend
const RestorantTypeSchema = new mongoose.Schema(
    {
        type_select: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const RestorantType = mongoose.model("restorant_type", RestorantTypeSchema);
//module expoart
module.exports = RestorantType;

