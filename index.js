const express = require('express');
const path = require('path');
const roomsRouter = require('./routers/roomRouter');
const bookingsRouter = require('./routers/bookingRouter');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use('/api/bookings/', bookingsRouter);
app.use('/api/rooms/', roomsRouter);

module.exports = app;