import React from 'react';

import {Grid, TextField, Button} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    submitBtn: {
        display: 'block!important',
        margin: '10px!important',
        width: '100%!important'
    },
    textInput: {
        width: '100%!important'
    },
    title: {
        textAlign: 'center'
    }
});

class GameBtn extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Connect 4 game</h1>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles, {withTheme: true})(GameBtn);