import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    gameBtn: {
        margin: '2px',
        border: '1px solid black',
        padding: '0px',
        height: '50px'
    }
});

class GameBtn extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Button className={classes.gameBtn} style={{width: this.props.dim}}>
                <ExpandMoreIcon/>
            </Button>
        )
    }
}


export default withStyles(styles, {withTheme: true})(GameBtn);