const express = require('express');
const router = express.Router();
const Bookings = require("../schemas/bookingModel");
const Rooms = require("../schemas/roomModel");

router.get('/admin', async (req, res) => {
    try{
        const bookings = await Bookings.find().exec();
        res.status(200).json(bookings);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.get('/fetchAllBookings', async (req, res) => {
    try{
        const bookings = await Bookings.find().exec();
        res.status(200).json(bookings);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.get('/fetchABooking/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const booking = await Bookings.findById(id).exec();
        res.status(200).json(booking);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.post("/addABooking", async (req, res) => {
    try{
        const  data  = req.body;
        const newBooking = new Bookings(data);
        const result = await newBooking.save();
        res.status(201).json(result);
        req.io.socket.emit('newBoking', data);
    }catch(err){
        res.status(500).json({ body: err.message });
    }
});

router.put('/updateABooking/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const data  = req.body;
        const result = await Bookings.findByIdAndUpdate(id, { $set: data }).exec();
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({ body: err.message});
    }
});

router.delete('/deleteABooking/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const result = await Bookings.deleteOne({ _id: id }).exec();
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
