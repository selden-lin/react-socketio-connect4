import  React from 'react';

import {Container} from '@material-ui/core';

import EnterNamePage from '../EnterNamePage/EnterNamePage';
import EnterRoomPage from '../EnterRoomPage/EnterRoomPage';
import EnterJoinRoomPage from '../EnterJoinRoomPage/EnterJoinRoomPage';
import ConnectFourGame from '../ConnectFourGame/ConnectFourGame';
import Socket from './sockets'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'name',
            playerName: '',
            roomId: '',
            joinOrCreateRoom: ''
        }
        this.socket = null;
        this.setName = this.setName.bind(this);
        this.setRoomId = this.setRoomId.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    
    
    setName(name) {
        this.setState({playerName: name});
    } 

    setRoomId(room) {
        this.setState({roomId: room})
        this.socket = new Socket(this.state.joinOrCreateRoom, this.state.playerName, this.state.roomId);
    }

    setPage(page) {
        if(page == 'join') {
            this.setState({joinOrCreateRoom: 'join'})
        } else if(page == 'create') {
            this.setState({joinOrCreateRoom: 'create'})
        }
        this.setState({currentPage: page})
    }

    displayPage() {
        switch(this.state.currentPage) {
            case 'name':
                return <EnterNamePage setName={this.setName} setPage={this.setPage}/>
            case 'room':
                return <EnterJoinRoomPage setPage={this.setPage}/>
            case 'join':
                return <EnterRoomPage mode='join' setRoom={this.setRoomId} setPage={this.setPage}/>
            case 'create':
                return <EnterRoomPage mode='create' setRoom={this.setRoomId} setPage={this.setPage}/> 
            case 'game':
                return <ConnectFourGame />
            default:
                return <EnterNamePage setName={this.setName} setPage={this.setPage}/>
        }
    }

    render() {
        return (
            <Container>
                { this.displayPage() }
            </Container>
        )
    }   
}

export default App;
