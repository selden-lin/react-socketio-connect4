import React from 'react';

import { withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    gameSquare: {
        margin: '2px',
        display: 'inline-block',
        border: '1px solid black'
    }
});

class GameSquare extends React.Component{

    render() {
        const {classes} = this.props
        let getSquareStyles = () => {
            if(this.props.fill === 'p1') {
                return {
                    backgroundColor: 'red',
                    width: this.props.dim,
                    height: this.props.dim
                }
            } else if(this.props.fill === 'p2') {
                return {
                    backgroundColor: 'yellow',
                    width: this.props.dim,
                    height: this.props.dim
                }
            } else {
                return {
                    backgroundColor: this.props.color,
                    width: this.props.dim,
                    height: this.props.dim
                }
            }
        }
        return (
            <div className={classes.gameSquare} 
            style={getSquareStyles()}/>
        )
    }
}


export default withStyles(styles, {withTheme: true})(GameSquare);