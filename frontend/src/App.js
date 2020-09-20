import  React from 'react';

import {Container} from '@material-ui/core';

import EnterNamePage from './EnterNamePage/EnterNamePage';
import EnterRoomPage from './EnterRoomPage/EnterRoomPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'name'
        }
    }

    displayPage() {
        switch(this.state.currentPage) {
            case 'name':
                return <EnterNamePage/>
            case 'room':
                return <EnterRoomPage/>
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
