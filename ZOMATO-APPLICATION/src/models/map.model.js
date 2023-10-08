const mongoose = require("mongoose");
// map model schema defiend
const MapSchema = new mongoose.Schema(
    {
         restorant:{
             type : mongoose.Types.ObjectId,
             ref  : "restorant",
         },
         location:{
            type : mongoose.Types.ObjectId,
            ref  : "location",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const Map = mongoose.model("map", MapSchema);
//module expoart
module.exports = Map;

