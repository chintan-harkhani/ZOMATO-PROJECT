const { UserService, EmailService } = require("../services");
const ejs = require("ejs");
const path = require("path");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

//crete user
const CreateUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const email = await UserService.FindEmailUser(reqBody.email);
        if (email) {
            throw new Error("Email Already Created By This " + email.email + "  Email ,Please Create By this  New Email..!");
        }
        const Number = await UserService.Findnumber(reqBody.contact_no);
        if (Number) {
            throw new Error("Phone Number Already Created This Number...");
        }
        let user = await UserService.CreateUser(reqBody);
        if (!user) {
            throw new Error(" User Not Created , Please Try  Again Later");
        };

        ejs.renderFile(
            path.join(__dirname, "../view/otp.ejs"),
            {
                email: reqBody.email,
                otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
                first_name: reqBody.first_name,
                last_name: reqBody.last_name,
            },
            async (err, data) => {
                console.log("huuuuuu")
                if (err) {
                    let userCreated = await UserService.FindEmailUser(reqBody.email);
                    if (userCreated) {
                        await UserService.deleteUserEmail(reqBody.email);
                    }
                    throw new Error("Something went wrong, please try again.");
                } else {
                    EmailService.sendMail(reqBody.email, data, "Verify Email");
                }
                console.log("ddgg");
            }
        );
        res.status(200).json({
            success: true,
            message: " SuccessFully  User Created ..!",
            data: user
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//User List
const UserList = async (req, res) => {
    try {
        const List = await UserService.UserListAll(req, res);
        res.status(200).json({
            success: true,
            message: " User Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//user Id find
const UserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully User List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete user
const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        await UserService.DeleteUser(userId);
        res.status(200).json({
            success: true,
            message: "Suucessfully User Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update user
const UpdateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        await UserService.UpdateUser(userId, req.body);
        res.status(200).json({
            success: true,
            message: "User Data update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log('get req body');
        const sendEmail = await EmailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        console.log('Send Done..');
        if (!sendEmail) {
            throw new Error("Something went wrong, please try again or later.");
        }

        res
            .status(200)
            .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const register = async (req, res) => {
    // validation;
    const { email, password, user_role} = req.body;

    const Password = await bcrypt.hash(password, 8);

    let option = {
        email,
        user_role,
        exp: moment().add(1, "days").unix(),
    };

    const token = await jwt.sign(option, jwtSecrectKey);

    const filter = {
        email,
        user_role,
        password: Password,
        token,
    };
// console.log(filter);
    const data = await UserService.createUser(filter);
// console.log(data);
    res.status(200).json({
        success: true,
        message: "User Data Create successfully!",
        data: data
    });
};

const login = async (req, res) => {
    try {
        // validation;
        const { email, password } = req.body;

        const findUser = await UserService.FindEmail({ email });

        if (!findUser) throw Error("User not found");

        const ConformPassword = await bcrypt.compare(password, findUser.password);
        if (!ConformPassword) throw Error("Incorrect password");

        let option = {
            email,
            user_role: findUser.user_role,
            exp: moment().add(1, "days").unix(),
        };

        let token;
        if (findUser && ConformPassword) {
            token = await jwt.sign(option, jwtSecrectKey);
        }

        let data;
        if (token) {
            data = await UserService.UserUpdate(findUser._id, token);
        }

        res.status(200).json({
            success: true,
            message: "User Data Login successfully!",
            data: data
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {

        const data = await UserService.UserList({ user_role: "admin" });
        res.status(200).json({
            success: true,
            message: "User List Get successfully!",
            data: data
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//function expoart
module.exports = {
    CreateUser,
    UserList,
    UserId,
    DeleteUser,
    UpdateUser,
    sendMail,
     register,
     login,
    getAllUser,
}