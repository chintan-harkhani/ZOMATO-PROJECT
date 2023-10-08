const mongoose = require("mongoose");
// user model schema defiend
const UserSchema = new mongoose.Schema(
    {
          user_name :{
             type : String,
             trim : true,
          },
          email :{
             type : String,
             trim : true,
          },
          password :{
             type : String,
             trim : true,
          },
          contact_no :{
             type : Number ,
             trim : true,
          },
          address :{
             type : String,
             trim : true,
          },
          user_role : {
             type : String,
             trim : true,
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
// model create
const User =    mongoose.model("user" , UserSchema);
//module expoart
module.exports = User;

