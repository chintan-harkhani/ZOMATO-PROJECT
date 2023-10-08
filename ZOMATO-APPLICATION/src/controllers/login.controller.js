const { LoginService } = require("../services");
//crete login
const CreateLogin = async (req, res) => {
    try {
        const reqBody = req.body;
        const email = await LoginService.FindEmail(reqBody.email);
        if (email) {
            throw new Error("Email Already Created By This " + email.email + "  Email ,Please Create By this  New Email..!");
        }
            let login = await LoginService.CreateLogin(reqBody);
            if (!login) {
                throw new Error(" User Not Login , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  User Login ..!",
                data: login
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//login List
const LoginList = async (req, res) => {
    try {
        const List = await LoginService.LoginList(req, res);
        res.status(200).json({
            success: true,
            message: " Login Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//login Id find
const LoginId = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const ID = await LoginService.LoginId(loginId);
        if (!ID) {
            throw new Error("Login User Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully login User List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Login
const DeleteLogin = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const ID = await LoginService.LoginId(loginId);
        if (!ID) {
            throw new Error("Login User Not Found !...");
        };
        await UserService.DeleteUser(loginId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Login User Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update  Login
const UpdateLogin = async (req, res) => {
    try {
        const loginId = req.params.loginId;
        const ID = await LoginService.LoginId(loginId);
        if (!ID) {
            throw new Error("Login User Not Found !...");
        };
        await LoginService.UpdateLogin(loginId, req.body);
        res.status(200).json({
            success: true,
            message: "Login User  Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
   CreateLogin,
   LoginList,
   LoginId,
   DeleteLogin,
   UpdateLogin
}