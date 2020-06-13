const BookingServices = require('../services/bookingServices');

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
        return res.status(200).json(booking);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.createBooking = async (req, res, next) => {
    try{
        const data = req.body;
        const newBooking = await BookingServices.createBooking(data);
        return res.status(200).json(newBooking);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.updateBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const data  = req.body;
        const updatedBooking = BookingServices.updateBooking(id, data);
        return res.status(200).json(updatedBooking);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};

exports.deleteBooking = async (req, res, next) => {
    try{
        const { id } = req.params;
        const bookingToDelete = BookingServices.deleteBooking(id);
        return res.status(200).json(bookingToDelete);
    }catch(err){
        return res.status(500).json({ body: err.message });
    }
};