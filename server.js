require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');
const port = process.env.PORT || 3030;
const app = require('./index.js');
const BookingControllers = require('./controllers/bookingControllers');

app.set('port', port);

const server = http.createServer(app);
const io = require('socket.io')(server);

const { NODE_ENV, PROD_MONGO_URL, DEV_MONGO_URL } = process.env;

let MONGO_URL;

if (NODE_ENV == "production"){
  MONGO_URL = PROD_MONGO_URL;
}else{
  MONGO_URL = DEV_MONGO_URL;
}

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => console.log('error connecting to database'));
db.once('open', () => console.log('connection established'));

io.on("connection", socket => {
    socket.on("newData", data => {
      io.emit("sendNotif", data);
    });
  socket.on("disconect", () => console.log("client disconnected"));
});

io.sockets.on('connection', BookingControllers.getAdminNotification);
io.sockets.on('connection', BookingControllers.createBooking);

server.listen(port, (err) => {
  if (err) {
    return err.message;
  } else {
    console.log(`Asb test server is listening at: ${port}`);
  }
});
