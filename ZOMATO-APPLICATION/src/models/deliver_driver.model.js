const mongoose = require("mongoose");
// dilivier driver model schema defiend
const DeliverDriverSchema = new mongoose.Schema(
    {
         user :{
           type : mongoose.Types.ObjectId,
            ref : "user"
         },
         vacancy_desc :{
            type :String,
            trim : true
         },
         availibility_status:{
           type :Boolean,
            default : true
         },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const DeliverDriver =    mongoose.model("deliverdriver" , DeliverDriverSchema);
//module expoart
module.exports = DeliverDriver;