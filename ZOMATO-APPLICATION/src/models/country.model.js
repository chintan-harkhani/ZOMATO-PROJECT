const mongoose = require("mongoose");
// country model schema defiend
const CountrySchema = new mongoose.Schema(
    {
        country_name :{
            type : String,
            trim : true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const Country =    mongoose.model("country" , CountrySchema);
//module expoart
module.exports = Country;

