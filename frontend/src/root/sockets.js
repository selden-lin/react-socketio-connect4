import io from 'socket.io-client';

export default class Socket {
    constructor(createOrJoin, playerId, roomId) {
        this.conn = io.connect('http://localhost:3000',{'transports': ['websocket', 'polling']});

        this.conn.on('connectSuccess', (socket) => {
            console.log('connected')
            if (createOrJoin == 'join') {
                this.conn.emit('joinRoom', playerId, roomId);
            } else {
                this.conn.emit('createRoom', playerId, roomId);
            }
        });
    }
}

