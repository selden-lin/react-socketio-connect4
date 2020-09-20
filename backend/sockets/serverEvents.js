let clientEvents = require('./clientEvents');

serverEvents = {}

serverEvents.connection = (io) => {
    return (socket) => {
        socket.emit('connectSuccess')
        clientEvents(socket, io);
    }
}

module.exports = function(io) {
    Object.keys(serverEvents).forEach((event) => {
        io.on(event, serverEvents[event](io));;
    })
}