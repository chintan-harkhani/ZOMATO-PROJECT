const mongoose = require("mongoose");
// Food model schema defiend
const FoodSchema = new mongoose.Schema(
 {
        food_name :{
             type : String,
             trim : true,
        },
        food_desc :{
             type : String,
             trim : true,
        },
        food_offer :{
             type : Number,
             trim : true,
        },
        food_type : {
              type :String,
              trim : true,
        },
        food_effect :{
             type : String,
             trim : true,
        },
        food_ratting :{
                 type : Number,
                 trim : true,
        },
        is_active :{
             type :Boolean,
             default : true,
        },
 },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const Food =    mongoose.model("foods" , FoodSchema);
//module expoart
module.exports = Food ;
