const joi = require("joi");
//create payment
const CreatePayment= {
    body:joi.object({
        order : joi.string().trim().required(),
        menu : joi.string().trim().required(),
        payment_method : joi.string()
        .valid('Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer', 'Cash', 'Other').required().messages({
          'string.valid': 'Invalid payment method type',
        }),
        transtion_date : joi.string().trim().required(),
        total_amount : joi.number().integer().required()
    }),
};
//module export
module.exports = {
    CreatePayment
}