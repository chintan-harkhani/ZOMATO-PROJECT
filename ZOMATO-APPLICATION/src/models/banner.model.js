const mongoose = require("mongoose");
const config = require("../config/config")
// banner model schema defiend
const BannerSchema = new mongoose.Schema(
    {
        banner_img :{
             type : String,
             trim :true,
        },
        banner_name :{
            type : String,
            trim : true,
        },
        banner_desc :{
             type : String,
             trim : true,
        },
        city : {
             type : mongoose.Types.ObjectId,
             ref : "city"
        },
        is_active :{
              type :Boolean,
              default:true
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON :{
             transform : function(doc ,data){
                if(data?.banner_img){
                    data.banner_img =`${config.base_url}Banner_Images/${data.banner_img}`;
                }
             }
        }
    },
);

// model create
const Banner = mongoose.model("banner" , BannerSchema);
//module expoart
module.exports = Banner;