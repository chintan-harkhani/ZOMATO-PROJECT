const mongoose = require("mongoose");
// city model schema defiend
const CitySchema = new mongoose.Schema(
    {
        city_name :{
            type : String,
            trim : true,
        },
        state :{
            type : mongoose.Types.ObjectId,
            ref:"state"
        },
        country :{
            type : mongoose.Types.ObjectId,
            ref:"country"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const City =    mongoose.model("city" , CitySchema);
//module expoart
module.exports = City ;

