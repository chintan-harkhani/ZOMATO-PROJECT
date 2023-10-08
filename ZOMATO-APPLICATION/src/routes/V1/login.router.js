const { LoginController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")
const { LoginValidation } = require("../../validations");
const router = express.Router();

//create Login
router.post("/create_login",
    validate(LoginValidation.CreateLogin),
    auth(),
  LoginController.CreateLogin
);
//login list
router.get("/login_list",
   LoginController.LoginList
);
//login id
router.get("/login_list/:loginId",
    LoginController.LoginId
);
//delete login
router.delete("/delete_login/:loginId",
    LoginController.DeleteLogin
);
//update login
router.put("/update_login/:loginId",
    LoginController.UpdateLogin
);

module.exports = router;