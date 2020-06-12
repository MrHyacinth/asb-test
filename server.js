const http = require("http");
const mongoose = require("mongoose");
const port = process.env.PORT || 3030;
const app = require("./index.js");

app.set("port", port);

const server = http.createServer(app);
const io = require("socket.io")(server);

let MONGO_URL = "mongodb://localhost:27017/";

mongoose.connect(MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", () => console.log("error connecting to database"));
db.once("open", () => console.log("connection established"));

io.on("connection", socket => {
  console.log("client connected");
  socket.on("newBooking", data => {
    io.emit("newBooking", data);
  });
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

server.listen(port, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Asb test server is listening at: ${port}`);
  }
});