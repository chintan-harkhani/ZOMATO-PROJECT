const {TokenController} =require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {TokenValidation} =require("../../validations");

const router = express.Router();

//create Token
router.post("/create_token",
  validate(TokenValidation.CreateToken),
  TokenController.CreateToken
);

// VerifyToken
router.get("/verify_token",
TokenController.VerifyToken
);

module.exports = router;