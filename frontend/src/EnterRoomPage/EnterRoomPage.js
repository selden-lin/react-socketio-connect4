import React from 'react';

import {Grid, TextField, Button} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    submitBtn: {
        margin: '10px!important',
        width: '45%!important'
    },
    textInput: {
        width: '100%!important'
    },
    title: {
        textAlign: 'center'
    }
});


class EnterRoomPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            mode: new String(this.props.mode).charAt(0).toUpperCase() + this.props.mode.slice(1),
            roomId: ""
        }
        this.cancelClick = this.cancelClick.bind(this)
        this.submitClick = this.submitClick.bind(this);
        this.textChange = this.textChange.bind(this)
    }

    cancelClick() {
        this.props.setPage('name');
    }

    submitClick() {
        if(!this.state.roomId) return;
        
        if(this.props.mode === "join") {
            this.props.setRoom(this.state.roomId)
        } else if(this.props.mode === "create") {
            this.props.setRoom(this.state.roomId)
        }
        this.props.setPage('game')
    }

    textChange(event) {
        this.setState({roomId: event.target.value})
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>{this.state.mode} Room</h1>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <form>
                        <TextField className={classes.textInput} onChange={this.textChange} label="Enter room name"/>
                    </form>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <form>
                        <Button className={classes.submitBtn} variant="contained" onClick={this.cancelClick} color="primary">Cancel</Button>
                        <Button className={classes.submitBtn} variant="contained" onClick={this.submitClick} color="primary">Submit</Button>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(EnterRoomPage);