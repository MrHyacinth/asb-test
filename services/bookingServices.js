const Bookings = require('../schemas/bookingModel');
const Rooms = require('../schemas/roomModel');

exports.getAdminNotification = async roomId => { 
    try{
    const bookedRoom = await Rooms.findOne({ _id: roomId });
        console.log(bookedRoom);
        return bookedRoom;
    }catch(err){
        return err.message
    } 
};

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

exports.createBooking = async (data) => { 
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
        let res = await Bookings.updateOne({ _id: id }, { $set: data });
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        return res;
    }catch(err){
        return err.message;
    }
};

exports.deleteBooking = async (id, data) => {
    try{
        const result = await Bookings.deleteOne({ _id: id });
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        return result;
    }catch(err){
        return err.message;
    }
};