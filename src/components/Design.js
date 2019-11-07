import React, { Component } from 'react';

export class Design extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { isBtnActive, basicDesign } = this.props;
        return(
            <div>
                Step One here
            </div>
        );
    }
}

export default Design;