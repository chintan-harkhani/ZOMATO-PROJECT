const { MapService } = require("../services");
//crete Map
const CreateMap = async (req, res) => {
    try {
        const reqBody = req.body;
        const MapEx = await MapService.FindRes(reqBody.restorant);
        if (MapEx) {
            throw new Error(" Map Location Already This  Created Restorant => " +MapEx.restorant);
        }
            let Map = await MapService.CreateMap(reqBody);
            if (!Map) {
                throw new Error(" Restorant Location  Map Not Created , Please Try  Again Later");
            };
            res.status(200).json({
                success: true,
                message: " SuccessFully  Location Map Created ..!",
                data: Map
            });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Map List
const MapList = async (req, res) => {
    try {
        const List = await MapService.MapList(req, res);
        res.status(200).json({
            success: true,
            message: " Map Data SuccessFully List Get !.....",
            data: List
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//Map Id find
const MapId = async (req, res) => {
    try {
        const mapId = req.params.mapId;
        const ID = await MapService.MapId(mapId);
        if (!ID) {
            throw new Error("Map Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Map Data List Get!....",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//delete Map
const DeleteMap = async (req, res) => {
    try {
        const mapId = req.params.mapId;
        const ID = await MapService.MapId(mapId);
        if (!ID) {
            throw new Error("Map Data Not Found !...");
        };
        await MapService.DeleteMap(mapId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Map Data  Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};

//update  Map
const UpdateMap = async (req, res) => {
    try {
        const mapId = req.params.mapId;
        const ID = await MapService.MapId(mapId);
        if (!ID) {
            throw new Error("Map Data Not Found !...");
        };
        await MapService.UpdateMap(mapId, req.body);
        res.status(200).json({
            success: true,
            message: "Map  Data update successfully!",
        });
    } catch (error)  {
        res.status(400).json({ success: false, message: error.message });
    };
};

//function expoart
module.exports = {
   CreateMap,
   MapList,
   MapId,
   DeleteMap,
   UpdateMap
}