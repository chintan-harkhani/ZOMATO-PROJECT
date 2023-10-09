const { LocationService } = require("../services");
//crete Location
const CreateLocation = async (req, res) => {
    try {
        const reqBody = req.body;
        const Address = await LocationService.FindLocation(reqBody.address);
        if (Address) {
            throw new Error("Address Already Created By This " + Address.address + " !");
        }
            let Location = await LocationService.CreateLocation(reqBody);
            if (!Location) {
                throw new Error(" Address  Location Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Location Created ..!",
                data: Location
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Location List
const LocationList = async (req, res) => {
    try {
        const List = await LocationService.LocationList(req, res);
        res.status(200).json({
            success: true,
            message: " Location Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Location Id find
const LocationId = async (req, res) => {
    try {
        const locationId = req.params.locationId;
        const ID = await LocationService.LocationId(locationId);
        if (!ID) {
            throw new Error("Location Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Location Data List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Location
const DeleteLocation = async (req, res) => {
    try {
        const locationId = req.params.locationId;
        const ID = await LocationService.LocationId(locationId);
        if (!ID) {
            throw new Error("Location Data Not Found !...");
        };
        await UserService.DeleteUser(locationId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Location Data Data Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update  Location
const UpdateLocation = async (req, res) => {
    try {
        const locationId = req.params.locationId;
        const ID = await LocationService.LocationId(locationId);
        if (!ID) {
            throw new Error("Location Data Not Found !...");
        };
        await LocationService.UpdateLocation(locationId, req.body);
        res.status(200).json({
            success: true,
            message: "Location  Data update successfully!",
        });
    } catch (error)  {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
   CreateLocation,
   LocationList,
   LocationId,
   DeleteLocation,
   UpdateLocation
}