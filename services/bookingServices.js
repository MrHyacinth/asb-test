const Bookings = require('../schemas/bookingModel');
const Rooms = require('../schemas/roomModel');
// const io = require('../server.js').io;
// console.log("io is", global.io);
// const socket = global.io.connect("http://127.0.0.1:3030");
// const socketHandler = require('../globals.js');
// const { io } = socketHandler;

exports.getAdminNotification = async () => {
    try{
        let bookedRoom;
        let data;
        global.io.sockets.on('sendNotif', data => {
            console.log('connect established');
            console.log("data is", data);;
            data = data;
        });
        console.log('data update', data);
        bookedRoom = Rooms.findOne({ _id: data._id });
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

exports.createBooking = async data => {
    try{
        const newBooking = new Bookings(data);
        const result = await newBooking.save();
        
    //    global.io.emit('newData', result);
        
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