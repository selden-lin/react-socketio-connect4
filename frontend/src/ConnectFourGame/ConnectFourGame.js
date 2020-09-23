import React from 'react';

import {Grid} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';

import GameSquare from './GameSquare/GameSquare';
import GameBtn from './GameBtn/GameBtn';

const styles = theme =>({
    gameTile: {
        paddingTop: '100%'
    },
    title: {
        textAlign: 'center'
    },
    gameGrid: {
        width: '100%'
    }
});

class ConnectFourGame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gridDim: 0
        }
        this.gameGrid = React.createRef();
    }

    componentDidMount () {
        this.setState({gridDim: this.gameGrid.current.offsetWidth})
    }

    render() {
        const {classes} = this.props;

        let makeSquares = () => {
            let squares = []
            for(let x=0;x<42;x++) 
                squares.push(<GameSquare color='white' key={x} dim={(this.state.gridDim-28)/8}/>)
            return squares;
        }
        let makeBtns = () => {
            let btns = [];
            for(let x=0;x<7;x++) {

            }
            return btns;
        }

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Connect 4 game</h1>
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <div ref={this.gameGrid} className={styles.gameGrid}>
                        {makeSquares()}
                    </div>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles, {withTheme: true})(ConnectFourGame);