const { Schema, model } = require("mongoose");

const RoomSchema = new Schema({
    roomType: {
        type: String, //eg mixed dorm, dorm or deluxe
        required: true
    },
    spec: {
        type: String, //eg male & female or all female
        required: true
    },
    numberOfBeds: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String, //eg available, booked
        required: true
    }
});

const Room = new model("Room", RoomSchema);

module.exports = Room;