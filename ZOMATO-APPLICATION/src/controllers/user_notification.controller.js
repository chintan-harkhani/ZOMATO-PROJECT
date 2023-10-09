const { NotificationService } = require("../services");
//crete user Notification
const CreateNotification = async (req, res) => {
    try {
        const reqBody = req.body;
        const NotificationEx = await NotificationService.FinMessage(reqBody.message);
        if (NotificationEx) {
            throw new Error("Notification Message Already This Message Created  => " +NotificationEx.message);
        }
            let Notification = await NotificationService.CreateNotification(reqBody);
            if (!Notification) {
                throw new Error(" Notification Message Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Notification Message  Created ..!",
                data: Notification
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// user Notification List
const NotificationList = async (req, res) => {
    try {
        const List = await NotificationService.NotificationList(req, res);
        res.status(200).json({
            success: true,
            message: " Notification Message List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

// user Notification Id find
const NotificationId = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;
        const ID = await NotificationService.NotificationId(notificationId);
        if (!ID) {
            throw new Error("Notification Message Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Notification Message Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete user Notification
const DeleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;
        const ID = await NotificationService.NotificationId(notificationId);
        if (!ID) {
            throw new Error("Notification Message Not Found !...");
        };
        await NotificationService.DeleteNotification(notificationId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Notification Message Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update user Notification
const UpdateNotification = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;
        const ID = await NotificationService.NotificationId(notificationId);
        if (!ID) {
            throw new Error("Notification Message Not Found !...");
        };
        await NotificationService.UpdateNotification(notificationId ,req.body);
        res.status(200).json({
            success: true,
            message: "Notification Message update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
  CreateNotification,
  NotificationList,
  NotificationId,
  DeleteNotification,
  UpdateNotification
}