const BookingServices = require('../services/bookingServices');

exports.getAdminNotification = async (req, res, next) => {
    try{
        let data;
        const bookedRoom = await BookingServices.getAdminNotification(data._id);
        return res.status(200).json(bookedRoom);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.getBookings = async (req, res, next) => {
    try{
        const bookings = await BookingServices.getBookings({});
        return res.status(200).json(bookings);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.getABooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const booking = await BookingServices.getABooking(id);
        return res.status(201).json(booking);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.createBooking = async (req, res, next) => {
    try{
        const data = req.body;
        const newBooking = await BookingServices.createBooking(data);
        // io.emit("newData", newBooking);
        return res.status(200).json(newBooking);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.updateBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const data  = req.body;
        const updatedBooking = await BookingServices.updateBooking(id, data);
        return res.status(201).json(updatedBooking);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.deleteBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const bookingToDelete = await BookingServices.deleteBooking(id);
        return res.status(200).json(bookingToDelete);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};