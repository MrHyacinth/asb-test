const http = require('http');
const mongoose = require('mongoose');
// const events = require('events');
const port = process.env.PORT || 3030;
const app = require('./index.js');
// const socketHandler = require('./globals.js');

app.set('port', port);

const server = http.createServer(app);
const io = require('socket.io')(server);
// global.io = io;


let MONGO_URL = 'mongodb://localhost:27017/';

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => console.log('error connecting to database'));
db.once('open', () => console.log('connection established'));

io.on("connection", socket => {
  console.log("client conneected"),
    socket.on("newData", data => {
      io.emit("sendNotif", data);
    });
  socket.on("disconect", () => console.log("client disconnected"));
});

// socketHandler.configure(server);

server.listen(port, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Asb test server is listening at: ${port}`);
  }
});

