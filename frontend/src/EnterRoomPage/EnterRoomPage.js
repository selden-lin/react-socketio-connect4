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
            mode: new String(this.props.mode).charAt(0).toUpperCase() + this.props.mode.slice(1)
        }
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
                        <TextField className={classes.textInput} label="Enter room name"/>
                    </form>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <form>
                        <Button className={classes.submitBtn} variant="contained" color="primary">Submit</Button>
                        <Button className={classes.submitBtn} variant="contained" color="primary">Cancel</Button>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(EnterRoomPage);