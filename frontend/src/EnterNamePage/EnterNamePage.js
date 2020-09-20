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

class EnterNamePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleNameChange =this.handleNameChange.bind(this)
        this.submitNameClick =this.submitNameClick.bind(this)
    }
    
    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    submitNameClick() {
        if(!this.state.name.trim()) return;
        this.props.setName(this.state.name);
        this.props.setPage('room')
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Enter Name</h1>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <form>
                        <TextField className={classes.textInput} label="Enter name" onChange={this.handleNameChange}/>
                        <Button className={classes.submitBtn} variant="contained" onClick={this.submitNameClick} color="primary">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(EnterNamePage);