const  {User_favorite} = require("../models");

//create User_favorite
const Createfavorite = async (reqBody)=>{
       return User_favorite.create(reqBody)
};
//User_favorite list
const FavoriteList  =async (req ,res) =>{
       return User_favorite.find().populate("food" ,{food_name:1 , food_desc:1, food_type:1,food_effect:1}).populate("restorant" ,{restorant_name:1,}).populate("user", {user_name:1});
};
// User_favorite id
const FavoriteId = async ( favoriteId)=>{
     return User_favorite.findById(favoriteId)
};
//upadte User_favorite
const Updatefavorite = async (favoriteId , updateBody)=>{
    return User_favorite.findByIdAndUpdate(favoriteId ,{ $set  : updateBody})
};
//delete User_favorite
const Deletefavorite =async (favoriteId) =>{
     return User_favorite.findByIdAndDelete (favoriteId)
};
//find User_favorite
const FindFood =async (food) =>{
      return User_favorite.findOne({food});
}
//module export
module.exports ={
    Createfavorite,
    FavoriteList,
    FavoriteId,
    Deletefavorite,
    Updatefavorite,
    FindFood,
}