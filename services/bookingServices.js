const Bookings = require('../schemas/bookingModel');

exports.getBookings = async () => {
    try{
        const bookings = await Bookings.find({});
        return bookings;
    }catch(err){
        return err.message;
    }
};

exports.getABooking = async id => {
    try{
        const booking = await Bookings.findOne({ _id: id });
        return booking;
    }catch(err){
        return err.message;
    }
};

exports.createBooking = async data => {
    try{
        const newBooking = new Bookings(data);
        const result = await newBooking.save();
        return result;
    }catch(err){
        return err.message;
    }
};

exports.updateBooking = async (id, data) => {
    try{
        const result = await Bookings.updateOne({ _id: id }, { $set: data });
        return result;
    }catch(err){
        return err.message;
    }
};

exports.deleteBooking = async (id, data) => {
    try{
        const result = await Bookings.deleteOne({ _id: id });
        res.status(200).json(result);
    }catch(err){
        return err.message;
    }
};