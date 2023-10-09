const express = require("express");//third party pakaje

//router require
const UserRouter  = require("./user.router");
const OwnerRouter  = require("./owner.route");
const TokenRouter =require("./token.router");
const CountryRouter = require("./country.router");
const StateRouter = require("./state.router");
const CityRouter = require("./city.router");
const BannerRouter = require("./banner.router");
const Restorant_typeRouter = require("./restorant_type.router");
const RestorantRouter = require("./restorant.router");
const FoodRouter = require("./food.router");
const MenuRouter = require("./menu.router");
const NotificationRouter = require("./user_notification.router");
const ReviewRouter = require("./user_review.router");
const LocationRouter = require("./location.router");
const MapRouter = require("./map.router");
const FavoriteRouter = require("./user_favorite.router");
const DeliverBoyRouter = require("./deliver_boy.router");
const OrderRouter = require("./food_order.router");
const TotalOrderRouter = require("./total_order.router");
const CoupanRouter = require("./coupan.router");
const PaymentRouter = require("./payment.router");

const router = express.Router(); //use the express router

//route name create
router.use("/user" , UserRouter);
router.use("/owner" , OwnerRouter);
router.use("/token" , TokenRouter);
router.use("/country" , CountryRouter);
router.use("/state" , StateRouter);
router.use("/city" , CityRouter);
router.use("/banner" , BannerRouter);
router.use("/restorant_type" , Restorant_typeRouter);
router.use("/restorant" , RestorantRouter);
router.use("/food" , FoodRouter);
router.use("/menu" , MenuRouter);
router.use("/notification" , NotificationRouter);
router.use("/review" , ReviewRouter);
router.use("/location" , LocationRouter);
router.use("/map" , MapRouter);
router.use("/favorite" , FavoriteRouter);
router.use("/deliver" , DeliverBoyRouter);
router.use("/order" , OrderRouter);
router.use("/totalorder" , TotalOrderRouter);
router.use("/coupan" , CoupanRouter);
router.use("/payment" , PaymentRouter);

module.exports = router; //router export