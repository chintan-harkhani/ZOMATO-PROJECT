const { Menu } = require("../models");

//create Menu
const CreateMenu = async (reqBody) => {
    return Menu.create(reqBody)
};
//Menu list
const MenuList = async (req, res) => {
    return Menu.find().populate("food", { food_name: 1, food_desc: 1, food_offer: 1, food_type: 1, food_effect: 1, food_ratting: 1 }).populate("restorant", { restorant_name: 1, restorant_desc: 1, }).populate("type", { type_select: 1 })
};
// Menu id
const MenuId = async (menuId) => {
    return Menu.findById(menuId)
};
//upadte Menu
const UpdateMenu = async (menuId, updateBody) => {
    return Menu.findByIdAndUpdate(menuId, { $set: updateBody })
};
//delete Menu
const DeleteMenu = async (menuId) => {
    return Menu.findByIdAndDelete(menuId)
};
//find  Menu
const FindMenuName = async (menu_name) => {
    return Menu.findOne({ menu_name });
}
//module export
module.exports = {
    CreateMenu,
    MenuList,
    MenuId,
    FindMenuName,
    DeleteMenu,
    UpdateMenu
}