const express = require('express');
const router = express.Router();
const Bookings = require("../schemas/bookingModel");
const Rooms = require("../schemas/roomModel");
const BookingControllers = require('../controllers/bookingControllers');

router.get('/admin', BookingControllers.getBookings);

router.get('/fetchAllBookings', BookingControllers.getBookings);

router.get('/fetchABooking/:id', BookingControllers.getABooking);

router.post("/addABooking", BookingControllers.createBooking);

router.put('/updateABooking/:id', BookingControllers.updateBooking);

router.delete('/deleteABooking/:id', BookingControllers.deleteBooking);

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
