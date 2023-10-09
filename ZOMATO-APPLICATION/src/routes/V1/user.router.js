const { UserController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")
const { UserValidation } = require("../../validations");
const router = express.Router();

//register
router.post("/register" ,
validate(UserValidation.CreateUsers),
UserController.register
)
//login
router.post("/login" ,
UserController.login
)
//user all list
router.get("/userall" ,
UserController.getAllUser
)
//create User
router.post("/create_user",
    validate(UserValidation.CreateUser),
    auth(),
    UserController.CreateUser
);
//user list
router.get("/user_list",
    UserController.UserList
);
//user id
router.get("/user_list/:userId",
    UserController.UserId
);
//delete user
router.delete("/delete_user/:userId",
    UserController.DeleteUser
);
//update user
router.put("/update_user/:userId",
    UserController.UpdateUser
);

router.post("/send-mail",
 validate(UserValidation.sendMail),
 UserController.sendMail
)

module.exports = router;