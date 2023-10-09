const mongoose = require("mongoose");
//Order model schema defiend
const OrderSchema = new mongoose.Schema(
    {  
        menu :{
           type : mongoose.Types.ObjectId,
           ref : "menu"
        },
        food :{
          type : mongoose.Types.ObjectId,
          ref : "foods"
       },
       order_Date :{
            type :String,
            trim : true,
       },
       orde_total_price :{
          type:Number,
          trim:true,
       },
       driver :{
           type : mongoose.Types.ObjectId,
           ref :"deliverdriver"
       },
      driver_user :{
          type : mongoose.Types.ObjectId,
           ref : "user"
        },
         user :{
           type : mongoose.Types.ObjectId,
            ref : "user"
         },
         order_status :{
           type: Boolean,
           default :true
         },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
// model create
const Order =    mongoose.model("order" , OrderSchema);
//module expoart
module.exports = Order;