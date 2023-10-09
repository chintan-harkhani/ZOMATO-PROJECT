const { Total_order } = require("../models");

//create Total_order
const CreateTotalorder = async (reqBody) => {
    return Total_order.create(reqBody)
};
//Total_order list
const TotalorderList = async (req, res) => {
    return Total_order.find().populate("order",{orde_total_price:1,order_Date:1}).populate("menu", {menu_img:1,menu_name:1,menu_price:1})
};
// Total_order id
const TotalorderId = async (totalorderId) => {
    return Total_order.findById(totalorderId)
};
//upadte Total_order
const UpdateTotalorder = async (totalorderId, updateBody) => {
    return Total_order.findByIdAndUpdate(totalorderId, { $set: updateBody })
};
//delete Total_order
const DeleteTotalorder = async (totalorderId) => {
    return Total_order.findByIdAndDelete(totalorderId)
};
//find  Total_order
const Findorder = async (order) => {
    return Total_order.findOne({order});
}
//module export
module.exports = {
    CreateTotalorder,
    TotalorderList,
    TotalorderId,
    Findorder,
    DeleteTotalorder,
    UpdateTotalorder
}