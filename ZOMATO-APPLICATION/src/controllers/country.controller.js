const { CountryService } = require("../services");
//crete Country
const CreateCountry = async (req, res) => {
    try {
        const reqBody = req.body;
        const countryEx = await CountryService.FindCountry(reqBody.country_name);
        if (countryEx) {
            throw new Error("Country Name Already This nameCreated  => " +countryEx.country_name);
        }
            let country = await CountryService.CreateCountry(reqBody);
            if (!country) {
                throw new Error(" Country Name Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Country Name  Created ..!",
                data: country
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//country List
const CountryList = async (req, res) => {
    try {
        const List = await CountryService.CountryList(req, res);
        res.status(200).json({
            success: true,
            message: " Country Name List  SuccessFully Display Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//country Id find
const CountryId = async (req, res) => {
    try {
        const countryId = req.params.countryId;
        const ID = await CountryService.CountryId(countryId);
        if (!ID) {
            throw new Error("Country Name  Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Country Name Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete country
const DeleteCountry = async (req, res) => {
    try {
        const countryId = req.params.countryId;
        const ID = await CountryService.CountryId(countryId);
        if (!ID) {
            throw new Error("Country Name  Not Found !...");
        };
        await CountryService.DeleteCountry(countryId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Country Name Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update Country
const UpdateCountry = async (req, res) => {
    try {
        const countryId = req.params.countryId;
        const ID = await CountryService.CountryId(countryId);
        if (!ID) {
            throw new Error("Country Name  Not Found !...");
        };
        await CountryService.UpdateCountry(countryId, req.body);
        res.status(200).json({
            success: true,
            message: "Country Name update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
  CreateCountry,
  CountryList,
  CountryId,
  DeleteCountry,
  UpdateCountry
}