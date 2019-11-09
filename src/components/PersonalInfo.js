import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName, handleChange } = this.props;
        return(
            <>
                <h2>Enter your personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default PersonalInfo;