function ioConnection(io) {

    if (!(this instanceof ioConnection)) {
        return new ioConnection(io);
    }

    this.io = io;
}

ioConnection.prototype.handleSocket = function() {

    this.io.on('connection', function (socket) {

        socket.on('newData', function (data) {
            socket.emit('sendNotif', data);
        });

    });
}

module.exports = ioConnection;