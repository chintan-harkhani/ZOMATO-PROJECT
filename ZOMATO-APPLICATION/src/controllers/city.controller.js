const { CityService } = require("../services");
//crete city
const CreateCity= async (req, res) => {
    try {
        const reqBody = req.body;
        const CityEx = await CityService.FindCity(reqBody.city_name);
        if (CityEx) {
            throw new Error("City Name Already This name Created  => " +CityEx.city_name);
        }
            let city = await CityService.CreateCity(reqBody);
            if (!city) {
                throw new Error(" City Name Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  City Name  Created ..!",
                data: city
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//city List
const CityList = async (req, res) => {
    try {
        const List = await CityService.CityList(req, res);
        res.status(200).json({
            success: true,
            message: " City Name List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//City Id find
const CityId = async (req, res) => {
    try {
        const cityId = req.params.cityId;
        const ID = await CityService.CityId(cityId);
        if (!ID) {
            throw new Error("City Name  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully City Name Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete city
const DeleteCity = async (req, res) => {
    try {
        const cityId = req.params.cityId;
        const ID = await CityService.CityId(cityId);
        if (!ID) {
            throw new Error("City Name  Not Found !...");
        };
        await CityService.DeleteCity(cityId);
        res.status(200).json({
            success: true,
            message: "Suucessfully City Name Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update city
const UpdateCity = async (req, res) => {
    try {
        const cityId = req.params.cityId;
        const ID = await CityService.CityId(cityId);
        if (!ID) {
            throw new Error("City Name  Not Found !...");
        };
        await CityService.UpdateCity(cityId, req.body);
        res.status(200).json({
            success: true,
            message: "City Name update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
CreateCity,
CityList,
CityId,
DeleteCity,
UpdateCity
}