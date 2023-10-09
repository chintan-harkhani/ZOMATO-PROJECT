const mongoose = require("mongoose");
// coupan model schema defiend
const CoupanSchema = new mongoose.Schema(
    {
         coupancode :{
             type :Number,
             trim :true,
         },
         discount :{
             type :Number,
             trim :true,
         },
        expire_date :{
             type :String,
             trim :true,
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
const Coupan =    mongoose.model("coupan" , CoupanSchema);
//module expoart
module.exports = Coupan;

