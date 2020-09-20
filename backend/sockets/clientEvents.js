let roomCtrl = require('./gameRoom');
let events = {}

// should get roomId and playerId
events.createRoom = (socket, io) => {
    return (data) => {
        let playerId = data.playerId;
        let roomId = data.roomId;
        try {
            roomCtrl.createRoom(playerId, roomId);
        } catch (err) {
            socket.emit('doneJoinRoom', {'error': err})
            return;
        }
        // room object successfully updated
        socket.join(roomId);
        io.to(roomId).emit('doneJoinRoom', {})
    }
}

// should get roomId and playerId
events.joinRoom = (socket, io) => {
    return (data) => {
        let playerId = data.playerId;
        let roomId = data.roomId;
        try {
            roomCtrl.joinRoom(playerId, roomId);
        } catch (err) {
            socket.emit('doneJoinRoom', {'error': err})
            return;
        }

        // room object successfully updated
        socket.join(roomId);
        io.to(roomId).emit('doneJoinRoom', {})
    }
}

// should get roomId, move and playerId
events.move = (socket, io) => {
    return (data) => {
        let playerId = data.playerId;
        let move = data.move;
        let roomId = data.roomId;

        io.to(roomId).emit('move', {
            'move': move,
            'playerId': playerId
        })
    }
}

events.disconnecting = (socket, io) => {
    return () => {
        Object.keys(rooms).forEach((room) => {
            io.to(room).emit('gameDisconnect', {'room': room})
            roomCtrl.removeRoom(room);
        })
    }
}

module.exports = function(socket, io) {
    // attach all events to socketio server
    Object.keys(events).forEach((event) => {
        socket.on(event, events[event](socket, io));
    })
}