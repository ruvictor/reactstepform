import React, { Component } from 'react';

export class Design extends Component {
    
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

export default Design;