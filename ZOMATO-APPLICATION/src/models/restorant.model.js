const mongoose = require("mongoose");
const config = require("../config/config")
// restorant  model schema defiend
const RestorantSchema = new mongoose.Schema(
  {
    restorant_name: {
      type: String,
      trim: true,
    },
    restorant_img: {
      type: String,
      trim: true,
    },
    restorant_desc: {
      type: String,
      trim: true,
    },
    restorant_contact: {
      type: Number,
      trim: true
    },
    restorant_open_time: {
      type: String,
      trim: true,
    },
    restorant_end_time: {
      type: String,
      trim: true,
    },
    restorant_type: {
      type: mongoose.Types.ObjectId,
      ref: "restorant_type"
    },
    restorant_addres: {
      type: String,
      trim: true,
    },
    city: {
      type: mongoose.Types.ObjectId,
      ref: "city",
    },
    state: {
      type: mongoose.Types.ObjectId,
      ref: "state",
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "country"
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user"
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.restorant_img) {
          data.restorant_img = `${config.base_url}Restorant_Images/${data.restorant_img}`;
        }
      }
    }
  }
);
// model create
const Restorant = mongoose.model("restorant", RestorantSchema);
//module expoart
module.exports = Restorant;

