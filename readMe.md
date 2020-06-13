## Asb.ng Test ##
*https://github.com/MrHyacinth/asb-test*

REST API built with Express.js on Node(server) and data storage with MongoDb. 

Using Postman, simulate creating a room or making a booking, by sending a javascript object with the neccessary keys and values as stipulated in their respective schemas, via POST to the relevant endpoint(see below). On successful submit, the newly created document is returned. The list of all available endpoints can be found in the appropriately named files in the routers directory of this project.

Program comprises of
- Mongoose schema for creating rooms
- Mongoose schema for creating bookings
- Endpoints for all CRUD functions for the Rooms Collection
- Endpoints for all CRUD functions for the Bookings Collection
- Admin API for viewing booked rooms in real-time

## To run ##

first install all depenencies with `npm install`

Provision the following environment variables
- PORT=3030
- MONGO_URL=SAMPLE_MONGO_URL_GOES_HERE

run `npm run start` to start the application 

## To Test ##

> GET http://localhost:3030/api/rooms/fetchAllRooms - returns all rooms.

> GET http://localhost:3030/api/bookings/fetchAllBookings - returns all bookings.

> POST http://localhost:3030/api/rooms/addARoom- creates a room.

> POST http://localhost:3030/api/bookings/addABookings- creates a booking.



