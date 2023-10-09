const  {Notification} = require("../models");

//create user Notification
const CreateNotification = async (reqBody)=>{
       return Notification.create(reqBody)
};
//user Notification list
const NotificationList  =async (req ,res) =>{
       return Notification.find().populate("user", {user_name:1,email:1})
};
// user Notification id
const NotificationId = async ( notificationId)=>{
     return Notification.findById(notificationId)
};
//upadte user Notification
const UpdateNotification = async (notificationId , updateBody)=>{
    return Notification.findByIdAndUpdate(notificationId ,{ $set  : updateBody})
};
//delete user Notification
const DeleteNotification =async (notificationId) =>{
     return Notification.findByIdAndDelete (notificationId)
};
//find user Notification message
const FinMessage =async (message) =>{
      return Notification.findOne({message});
}
//module export
module.exports ={
    CreateNotification,
    NotificationList,
    NotificationId,
    DeleteNotification,
    UpdateNotification,
    FinMessage
}