const RoomServices = require('../services/roomServices');

exports.getRooms = async (req, res, next) => {
    try{
        const rooms = await RoomServices.getRooms({});
        return res.status(200).json(rooms);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.getAvailableRooms = async (req, res, next) => {
    try{
        const availableRooms = await RoomServices.getAvailableRooms();
        return res.status(200).json(availableRooms);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.getARoom = async (req, res, next) => {
    try{
        const { id } = req.params;
        const aRoom = await RoomServices.getARoom(id);
        return res.status(200).json(aRoom);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.createARoom = async (req, res, next) => {
    try{
        const data  = req.body;
        const newRoom = await RoomServices.createARoom(data);
        return res.status(201).json(newRoom);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.updateARoom = async (req, res, next) => {
    try{
        const { id } = req.params;
        const data = req.body;
        const roomToUpdate = await RoomServices.updateARoom(id, data);
        return res.status(201).json(roomToUpdate);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.deleteARoom = async (req, res, next) => {
    try{
        const { id } = req.params;
        const roomToDelete = await RoomServices.deleteARoom(id);
        return res.status(200).json(roomToDelete);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};