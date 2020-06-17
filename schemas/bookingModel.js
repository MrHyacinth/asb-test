const { Schema, model } = require("mongoose");
const { insertHandler } = require('../');

const BookingSchema = new Schema({
    numberOfGuests: {
        type: String,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    roomId: {
        type: String,
        required: true
    }
});

const Booking = new model("Booking", BookingSchema);



const dbBookings = [
    {
        "numberOfGuests": "4",
        "checkIn": "2020-06-17",
        "checkOut": "2020-06-18",
        "roomId": "12345"
    }
];

// this block of code inserts dummy data and runs only at the initial load
const insertBookingsHandler = (data) => {

    let res = [];

    Booking.countDocuments({}, (err, count) => {
        if (err) return err.message;
        if(count === 0){
            data.forEach((item) => {
                let newDoc = new Booking(item);
                let result = newDoc.save();
                res.push(result);
            });
        }  
    })

    return res;
};

insertBookingsHandler(dbBookings)

module.exports = Booking;