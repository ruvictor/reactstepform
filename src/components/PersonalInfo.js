import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { fisrtName, lastName, handleChange } = this.props;
        return(
            <>
                <h2>Enter your personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="firstName"
                        value={fisrtName}
                        onChange={handleChange('firstName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange('lastName')}
                    />
                </label>
            </>
        );
    }
}

export default PersonalInfo;