const { Menu } = require("../models");

//create Menu
const CreateMenu = async (reqBody) => {
    return Menu.create(reqBody)
};
//Menu list
const MenuList = async (req, res) => {
    return Menu.find()
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
        return Menu.findOne({menu_name});
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