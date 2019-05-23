import React, { Component } from 'react';

const SubscriberSearch = ({submitForm, inputChange}) => {
    return (
        <React.Fragment>
            <label>
                Prenumerationsnummer:
                <input type="text" name="subNr" onChange={(event) => inputChange('subscriberSearch', event)} /> <br/>
            </label>
            <button onClick={submitForm}></button>
        </React.Fragment>
    );
} 
export default SubscriberSearch