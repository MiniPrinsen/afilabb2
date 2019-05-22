import React, { Component } from 'react';

const SubscriberForm = ({submitForm, inputChange}) => {
    return (
        <React.Fragment>
            <label>
                Prenumerationsnummer:
                <input type="text" name="subNr" onChange={(event) => inputChange('subscriberForm', event)} /> <br/>
            </label>
            <button onClick={submitForm}></button>
        </React.Fragment>
    );
} 
export default SubscriberForm