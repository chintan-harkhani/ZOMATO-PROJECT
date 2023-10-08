const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
          email :{
             type : String,
             trim : true,
          },
          password :{
             type : String,
             trim : true,
          },
        user_role :{
             type : mongoose.Types.ObjectId,
              ref : "user"
        },
          is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Login =    mongoose.model("login_page" , LoginSchema);
module.exports = Login;

