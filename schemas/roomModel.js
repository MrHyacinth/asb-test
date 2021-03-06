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

const dbRooms = [
    {
        roomType: "mixed dorm room",
        spec: "male & female",
        numberOfBeds: 4,
        price: 2000,
        status: "available",
    },
    {
        roomType: "dorm room",
        spec: "female only",
        numberOfBeds: 4,
        price: 2500,
        status: "available",
    },
    {
        roomType: "mixed dorm room",
        spec: "male & female",
        numberOfBeds: 8,
        price: 1500,
        status: "available",
    },
    {
        roomType: "deluxe room",
        spec: "open use",
        numberOfBeds: 1,
        price: 3000,
        status: "available",
    },
    {
        roomType: "standard double room",
        spec: "open use",
        numberOfBeds: 2,
        price: 2700,
        status: "available",
    }
];

const insertRoomsHandler = (data) => {

    let res = [];

    Room.countDocuments({}, (err, count) => {
        if (err) return err.message;
        if(count === 0){
            data.forEach((item) => {
                let newDoc = new Room(item);
                let result = newDoc.save();
                res.push(result);
            });
        }  
    })

    return res;
};

insertRoomsHandler(dbRooms)

module.exports = Room;