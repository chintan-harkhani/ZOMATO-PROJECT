const mongoose = require("mongoose");
//total Order model schema defiend
const TotalOrderSchema = new mongoose.Schema(
    {  
        order :{
            type : mongoose.Types.ObjectId,
            ref : "order",
         },
        menu :{
           type : mongoose.Types.ObjectId,
           ref : "menu"
        },
        quantity :{
             type :Number,
             trim :true,
        },
        total_price :{
             type :Number,
             trim :true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const TotalOrder =    mongoose.model("total_order" , TotalOrderSchema);
//module expoart
module.exports = TotalOrder;