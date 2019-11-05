import React, { Component } from 'react';
import Design from './Design';

export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        basicDesign: 0,

        // step 2
        pageContentType: 0,
        howManyPages: 0,

        isBtnActive: true
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

    handleChange = input => e => {
        this.setState({[input]: e.target.value, isBtnActive: false});
    }

    showStep = () => {
        const { step, isBtnActive, basicDesign } = this.state;

        if(step === 1)
            return (<Design 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                isBtnActive={isBtnActive} 
                basicDesign={basicDesign}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 7.</h2>
                <div className="FlexDisplay">
                    <div className="LeftSide">
                        {this.showStep()}
                    </div>
                    <div className="RightSide">
                        Prices
                    </div>
                </div>
            </>
        );
    }
}

export default StepForm;