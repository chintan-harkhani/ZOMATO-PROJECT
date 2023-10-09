const { PaymentService } = require("../services");
//create Payment
const CreatePayment= async (req, res) => {
    try {
        const reqBody = req.body;
        const PaymentEX = await PaymentService.FindOrder(reqBody.order);
        if (PaymentEX) {
            throw new Error("Payment order Already This add  => " +PaymentEX.order);
        }
            let Payment = await PaymentService.CreatePayment(reqBody);
            if (!Payment) {
                throw new Error(" Payment  Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully Payment Data  Created ..!",
                data: Payment
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Payment List
const PaymentList = async (req, res) => {
    try {
        const List = await PaymentService.PaymentList(req, res);
        res.status(200).json({
            success: true,
            message: " Payment  List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Payment Id find
const PaymentId = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        const ID = await PaymentService.PaymentId(paymentId);
        if (!ID) {
            throw new Error("Payment Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Payment Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Payment
const DeletePayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        const ID = await PaymentService.PaymentId(paymentId);
        if (!ID) {
            throw new Error("Payment Data  Not Found !...");
        };
        await PaymentService.DeletePayment(paymentId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Payment Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Payment
const UpdatePayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;
        const ID = await PaymentService.PaymentId(paymentId);
        if (!ID) {
            throw new Error("Payment Data  Not Found !...");
        };
        await PaymentService.UpdatePayment(paymentId, req.body);
        res.status(200).json({
            success: true,
            message: "Payment Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//function expoart
module.exports = {
CreatePayment,
PaymentList,
PaymentId,
DeletePayment,
UpdatePayment
}