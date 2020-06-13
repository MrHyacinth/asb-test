const Rooms = require('../schemas/roomModel');

exports.getRooms = async () => {
    try{
        const rooms = await Rooms.find({});
        return rooms;
    }catch(err){
        return err.message;
    }
};

exports.getAvailableRooms = async () => {
    try{
        const availableRooms = await Rooms.find({ status: "available" });
        return availableRooms;
    }catch(err){
        return err.message;
    }
};

exports.getARoom = async id => {
    try{
        const thisRoom = await Rooms.findOne({ _id: id });
        return thisRoom;
    }catch(err){
        return err.message;
    }
};

exports.createARoom = async data => {
    try{
        const newRoom = new Rooms(data);
        const result = await newRoom.save();
        return result;
    }catch(err){
        return err.message;
    }
};

exports.updateARoom = async (id, data) => {
    try{
        const result = await Rooms.updateOne({ _id: id }, { $set: data });
        return result;
    }catch(err){
        return err.message;
    }
};

exports.deleteARoom = async id => {
    try{
        const result = await Rooms.deleteOne({ _id: id });
        res.status(200).json(result);
    }catch(err){
        return err.message;
    }
};