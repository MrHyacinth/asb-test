const express = require('express');
const router = express.Router();
const Rooms = require("../schemas/roomModel");

router.get('/allRooms', async (req, res) => {
    try{
        const rooms = await Rooms.find().exec();
        res.status(200).json(rooms);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.get('/availableRooms', async (req, res) => {
    try{
        const rooms = await Rooms.find({ status: "available" }).exec();
        res.status(200).json(rooms);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.get('/aRoom/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const room = await Rooms.findById(id).exec();
        res.status(200).json(room);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.post('/addRoom', async (req, res) => {
    try{
        const  data  = req.body;
        const newRoom = new Rooms(data);
        const result = await newRoom.save();
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.put('/updateRoom/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const data  = req.body;
        const result = await Rooms.findByIdAndUpdate(id, { $set: data }).exec();
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({ body: err.message});
    }
});

router.delete('/deleteRoom/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const result = await Rooms.deleteOne({ _id: id }).exec();
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({ body: err.message});
    }
});

router.use((req, res) => {
    res.status(404).json({
        error: true,
        message: "Error 404 - Route Not Found" 
    });
});

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        error: true,
        body: err.message,
        message: "Error in app"
    });
});

module.exports = router;


