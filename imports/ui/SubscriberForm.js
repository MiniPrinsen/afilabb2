import React from 'react';

const SubscriberForm = ({ adForm, inputChange, subscriberForm }) =>  {
    return (
        <React.Fragment>
            <label>
                Förnamn:
                <input 
                type="text" 
                name="subFirstName" 
                value={subscriberForm.subFirstName} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
                <br/>
                Efternamn: 
                <input 
                type="text" 
                name="subLastName" 
                value={subscriberForm.subLastName} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
                <br/>
                Personnummer:
                <input type="text" 
                name="subPersonNumber" 
                value={subscriberForm.subPersonNumber} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
                <br/>
                Adress:
                <input 
                type="text" 
                name="subAddress" 
                value={subscriberForm.subAddress} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
                <br/>
                PostalCode:
                <input 
                type="text" 
                name="subPostalCode" 
                value={subscriberForm.subPostalCode} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
                <br/>
                Prenumerationsnummer: 
                <input 
                type="text" 
                name="subPrenNr" 
                value={subscriberForm.subPrenNr} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                readOnly/> 
                <br/> 
                <br/>
            </label>
            <button onClick={adForm}></button>
        </React.Fragment>
    ); 
}
export default SubscriberForm