const _gameRooms = {};

const PlayerRoomAssigner = {
    createRoom: (playerId, roomId) => {
        if (roomId.trim() === "" || roomId in _gameRooms) {
            throw 'Room name is invalid or already exists'
            return;
        } 
        console.log("Create room")
        console.log(playerId);
        console.log(roomId);
        _gameRooms[roomId] = [playerId]
    },
    joinRoom: (playerId, roomId) => {
        if (roomId.trim() === "" || !(roomId in _gameRooms)) {
            throw 'Room name is invalid or does not exist'
            return;
        } 
        if(_gameRooms[roomId].length >= 2) {
            throw 'Room is full';
            return;
        }
        
        _gameRooms[roomId].push(playerId)
    },
    removeRoom: (roomId) => {
        if(roomId in _gameRooms)
            delete _gameRooms[roomId];
    }
}

Object.freeze(PlayerRoomAssigner);
module.exports = PlayerRoomAssigner;