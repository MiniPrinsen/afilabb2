import React, { Component } from 'react';

const SubscriberSearch = ({submitForm, inputChange}) => {
    return (
        <React.Fragment>     
            <label>
            <h2>Logga in prenumerant</h2>
                Prenumerationsnummer:
                <input 
                type="text" 
                name="subSearchNr" 
                autocomplete="off"
                className="sub-search" 
                onChange={(event) => inputChange('subscriberSearch', event)} 
                />
                <button onClick={submitForm}>Logga in</button>
            </label>
            
        </React.Fragment>
    );
} 
export default SubscriberSearch