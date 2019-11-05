import React, { Component } from 'react';
import StepOne from './StepOne';

export class StepForm extends Component {
    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    showStep = () => {
        const { step } = this.state;

        if(step === 1)
            return <StepOne />;
    }

    render(){
        return(
            <>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;