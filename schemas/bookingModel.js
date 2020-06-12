const { Schema, model } =require("mongoose");

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

module.exports = Booking;