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
            gridDim: 0,
            gameState: [
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','',''],
                ['','','','','','','']
            ],
            playerToMove: 'p1'
        }
        this.newMove = this.newMove.bind(this);
        this.gameGrid = React.createRef();
    }

    newMove(col) {
        let state = this.state.gameState.slice();

        let row = -1;
        for(let x=5;x>-1;x--) {
            if(this.state.gameState[x][col] === '') {
                row = x;
                break;
            }
        }
        if(row === -1) return;
        state[row][col] = this.state.playerToMove;
        this.setState({gameState: state.slice()})

        if(this.state.playerToMove === 'p1') this.setState({playerToMove: 'p2'})
        else this.setState({playerToMove: 'p1'})
        console.log(this.state.playerToMove)
    }

    componentDidMount () {
        this.setState({gridDim: this.gameGrid.current.offsetWidth})
    }

    render() {
        const {classes} = this.props;

        let makeSquares = () => {
            let squares = []
            for(let row=0;row<6;row++) {
                for(let col=0;col<7;col++) {
                    squares.push(
                        <GameSquare 
                            fill={this.state.gameState[row][col]} 
                            key={row+' '+col} 
                            dim={(this.state.gridDim-28)/8}
                        />
                    )
                }
            }
            return squares;
        }
        let makeBtns = () => {
            let btns = [];
            for(let x=0;x<7;x++) {
                btns.push(<GameBtn key={x} col={x} makeMove={this.newMove} dim={(this.state.gridDim-28)/8+2}/>)
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
                        {makeBtns()}
                        {makeSquares()}
                    </div>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles, {withTheme: true})(ConnectFourGame);