import React from 'react';

import {Grid, TextField, Button} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    gameSquare: {
        margin: '2px',
        display: 'inline-block',
        border: '1px solid black'
    }
});

class GameSquare extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.gameSquare} 
            style={{
                backgroundColor: this.props.color,
                width: this.props.dim,
                height: this.props.dim
            }}/>
        )
    }
}


export default withStyles(styles, {withTheme: true})(GameSquare);