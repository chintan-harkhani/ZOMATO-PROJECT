const mongoose = require("mongoose");
// state model schema defiend
const StateSchema = new mongoose.Schema(
    {
        state_name :{
            type : String,
            trim : true,
        },
        country :{
             type : mongoose.Types.ObjectId,
             ref : "country",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const State =    mongoose.model("state" , StateSchema);
//module expoart
module.exports =  State;

