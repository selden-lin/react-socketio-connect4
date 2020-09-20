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

class EnterJoinRoomPage extends React.Component{
    constructor(props) {
        super(props);
        this.joinClick = this.joinClick.bind(this);
        this.createClick = this.createClick.bind(this);
    }

    joinClick() {
        this.props.setPage('join');
    }

    createClick() {
        this.props.setPage('create');
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Join an existing room or create an new room</h1>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <form>
                        <Button className={classes.submitBtn} variant="contained" onClick={this.joinClick} color="primary">Join Room</Button>
                        <Button className={classes.submitBtn} variant="contained" onClick={this.createClick} color="primary">Create Room</Button>
                    </form>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        )
    }
}


export default withStyles(styles, {withTheme: true})(EnterJoinRoomPage);