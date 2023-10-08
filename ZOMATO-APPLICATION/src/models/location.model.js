const mongoose = require("mongoose");
// location model schema defiend
const LocationSchema = new mongoose.Schema(
    {
          address :{
               type :String,
               trim : true
          },
        city: {
            type: mongoose.Types.ObjectId,
            ref: "city",
          },
          state: {
            type: mongoose.Types.ObjectId,
            ref: "state",
          },
          country: {
            type: mongoose.Types.ObjectId,
            ref: "country"
          },
          zipcode :{
             type : Number,
             trim : true,
          },
          latitude :{
             type : String,
             trim : true,
          },
          longitude :{
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
const Location = mongoose.model("location", LocationSchema);
//module expoart
module.exports = Location;

