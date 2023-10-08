const { MenuService } = require("../services");
//create Menu
const CreateMenu= async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.menu_img = req.file.filename
        } else {
            throw new Error("Menu Images Is Required....!");
        }
        const MenuEx = await MenuService.FindMenuName(reqBody.menu_name);
        if (MenuEx) {
            throw new Error("Menu Name Already This name  Created => " +MenuEx.menu_name);
        }
            let Menu = await MenuService.CreateMenu(reqBody);
            if (!Menu) {
                throw new Error(" Menu Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Menu Data  Created ..!",
                data: Menu
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Menu List
const MenuList = async (req, res) => {
    try {
        const List = await MenuService.MenuList(req, res);
        res.status(200).json({
            success: true,
            message: " Menu Data  List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Menu Id find
const MenuId = async (req, res) => {
    try {
        const menuId = req.params.menuId;
        const ID = await MenuService.MenuId(menuId);
        if (!ID) {
            throw new Error("Menu Data  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Menu Data Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Menu
const DeleteMenu = async (req, res) => {
    try {
        const menuId = req.params.menuId;
        const ID = await MenuService.MenuId(menuId);
        if (!ID) {
            throw new Error("Menu Data  Not Found !...");
        };
        await MenuService.DeleteMenu(menuId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Menu Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Menu
const UpdateMenu = async (req, res) => {
    try {
        const menuId = req.params.menuId;
        const ID = await MenuService.MenuId(menuId);
        if (!ID) {
            throw new Error("Menu Data  Not Found !...");
        };
        await MenuService.UpdateMenu(menuId, req.body);
        res.status(200).json({
            success: true,
            message: "Menu Data  update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
CreateMenu,
MenuList,
MenuId,
DeleteMenu,
UpdateMenu
}