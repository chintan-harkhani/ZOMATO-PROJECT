const mongoose = require("mongoose");
//Payment model schema defiend
const PaymentSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order",
        },
        menu: {
            type: mongoose.Types.ObjectId,
            ref: "menu"
        },
        payment_method: {
            type: String,
            trim: true,
        },
        transtion_date: {
            type: String,
            trim: true
        },
        total_amount :{
             type : Number,
             trim :true,
        },
        transtion_status :{
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
const Payment = mongoose.model("payment", PaymentSchema);
//module expoart
module.exports = Payment;