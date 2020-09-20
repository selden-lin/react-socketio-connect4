let events = {}

events.createRoom = (arg) => {}
events.joinRoom = (arg) => {}
events.move = (arg) => {}
events.disconnect = (arg) => {}

module.exports = function(socket) {
    // attach all events to socketio server
    Object.keys(events).forEach((event) => {
        socket.on(key, events[event])
    })
}