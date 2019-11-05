import React, { Component } from 'react';

export class SetpOne extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        return(
            <div>
                Step One here
            </div>
        );
    }
}

export default SetpOne;