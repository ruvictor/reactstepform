import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';

export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',

        // step 2
        job: '',

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
        const { step, firstName, lastName } = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                lastName={lastName}
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