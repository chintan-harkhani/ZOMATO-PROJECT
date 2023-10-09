const { User } = require("../models");

//create user
const CreateUser = async (reqBody) => {
    return User.create(reqBody)
};
//user list
const UserListAll = async (req, res) => {
    return User.find()
};
// user id
const UserId = async (userId) => {
    return User.findById(userId)
};
//upadte user
const UpdateUser = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody })
};
//delete user
const DeleteUser = async (userId) => {
    return User.findByIdAndDelete(userId)
};
//find user
const FindEmailUser = async (email) => {
    return User.findOne({ email });
}
const Findnumber = async (contact_no) => {
    return User.findOne({ contact_no })
}
const deleteUserEmail = async (email) => {
    return User.findOneAndDelete({ email: email });
}
const createUser = async (body) => {
    return await User.create(body)
};

const FindEmail = async (email) => {
    return await User.findOne({ email });
};

const UserUpdate = async (_id, token) => {
    return await User.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};

const UserList = async (user_role) => {
    return await User.find(user_role);
};

//module export
module.exports = {
    CreateUser,
    UserListAll,
    UserId,
    DeleteUser,
    UpdateUser,
    FindEmailUser,
    Findnumber,
    deleteUserEmail,
    createUser,
    UserList,
    FindEmail,
    UserUpdate
}
