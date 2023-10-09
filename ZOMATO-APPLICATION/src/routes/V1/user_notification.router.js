const { NotificationController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { NotificationValidation } = require("../../validations");
const router = express.Router();

//create user Notification
router.post("/create_notification",
    validate(NotificationValidation.CreateNotification),
    auth(),
    NotificationController.CreateNotification
);
// user Notification list
router.get("/notification_list",
    NotificationController.NotificationList
);
// user Notification id
router.get("/notification_list/:notificationId",
    NotificationController.NotificationId
);
//delete user Notification
router.delete("/delete_notification/:notificationId",
    NotificationController.DeleteNotification
);
//update user Notification
router.put("/update_notification/:notificationId",
    NotificationController.UpdateNotification
);

module.exports = router;