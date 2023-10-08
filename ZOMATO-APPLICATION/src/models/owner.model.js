const mongoose = require("mongoose");
// owner model schema defiend
const OwnerSchema = new mongoose.Schema(
    {
          owner_name :{
             type : String,
             trim : true,
          },
          email :{
             type : String,
             trim : true,
          },
          contact_no :{
             type : Number ,
             trim : true,
          },
          restorant:{
            type : mongoose.Types.ObjectId,
            ref  : "restorant",
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
const owner =    mongoose.model("owner" , OwnerSchema);
//module expoart
module.exports = owner;

