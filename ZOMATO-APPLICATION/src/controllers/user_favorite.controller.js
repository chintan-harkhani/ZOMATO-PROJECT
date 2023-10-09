const { FavoriteService } = require("../services");
//crete Favorite
const CreateFavorite = async (req, res) => {
    try {
        const reqBody = req.body;
        const FavoriteEx = await FavoriteService.FindFood(reqBody.food);
        if (FavoriteEx) {
            throw new Error(" Favorite Food Already This  Created Food => " +FavoriteEx.food);
        }
            let Favorite = await FavoriteService.Createfavorite(reqBody);
            if (!Favorite) {
                throw new Error("   Favorite Food Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully   Favorite Food Created ..!",
                data: Favorite
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Favorite List
const FavoriteList = async (req, res) => {
    try {
        const List = await FavoriteService.FavoriteList(req, res);
        res.status(200).json({
            success: true,
            message: " Favorite Food Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Favorite Id find
const FavoriteId = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId;
        const ID = await FavoriteService.FavoriteId(favoriteId);
        if (!ID) {
            throw new Error("Favorite Food Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Favorite Food Data List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Favorite
const DeleteFavorite = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId;
        const ID = await FavoriteService.FavoriteId(favoriteId);
        if (!ID) {
            throw new Error("Favorite Food Data Not Found !...");
        };
        await FavoriteService.Deletefavorite(favoriteId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Favorite Food Data  Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update  Favorite
const UpdateFavorite = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId;
        const ID = await FavoriteService.FavoriteId(favoriteId);
        if (!ID) {
            throw new Error("Favorite Food Data Not Found !...");
        };
        await FavoriteService.Updatefavorite(favoriteId, req.body);
        res.status(200).json({
            success: true,
            message: "Favorite  Data update successfully!",
        });
    } catch (error)  {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
   CreateFavorite,
   FavoriteList,
   FavoriteId,
   DeleteFavorite,
   UpdateFavorite
}