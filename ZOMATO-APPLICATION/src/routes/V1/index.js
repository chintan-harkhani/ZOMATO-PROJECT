const express = require("express");//third party pakaje

//router require
const UserRouter  = require("./user.router");
const OwnerRouter  = require("./owner.route");
const LoginRouter  = require("./login.router");
const TokenRouter =require("./token.router");
const CountryRouter = require("./country.router");
const StateRouter = require("./state.router");
const CityRouter = require("./city.router");
const BannerRouter = require("./banner.router");
const Restorant_typeRouter = require("./restorant_type.router");
const RestorantRouter = require("./restorant.router");
const FoodRouter = require("./food.router");

const router = express.Router(); //use the express router

//route name create
router.use("/user" , UserRouter);
router.use("/owner" , OwnerRouter);
router.use("/login" , LoginRouter);
router.use("/token" , TokenRouter);
router.use("/country" , CountryRouter);
router.use("/state" , StateRouter);
router.use("/city" , CityRouter);
router.use("/banner" , BannerRouter);
router.use("/restorant_type" , Restorant_typeRouter);
router.use("/restorant" , RestorantRouter);
router.use("/food" , FoodRouter);

module.exports = router; //router export