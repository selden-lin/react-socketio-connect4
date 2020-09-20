import React from 'react';
import './EnterNamePage.css';

import {Grid, TextField, Button} from '@material-ui/core';

export default class EnterNamePage extends React.Component{
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Enter Name</h1>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <form>
                        <TextField label="Enter name"/>
                        <Button variant="contained" color="primary">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        )
    }
}