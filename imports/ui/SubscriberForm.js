import React from 'react';

const SubscriberForm = ({ adForm, inputChange, subscriberForm }) =>  {
    return (
        <React.Fragment>
            <label>
            <h2>Dina uppgifter</h2>
            <div className="input-container">
                Förnamn:
                <input 
                type="text" 
                name="subFirstName" 
                value={subscriberForm.subFirstName} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
            </div>
            <div className="input-container">
                Efternamn: 
                <input 
                type="text" 
                name="subLastName" 
                value={subscriberForm.subLastName} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
            </div>
            <div className="input-container">
                Personnummer:
                <input type="text" 
                name="subPersonNumber" 
                value={subscriberForm.subPersonNumber} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
            </div>
             <div className="input-container">
                Adress:
                <input 
                type="text" 
                name="subAddress" 
                value={subscriberForm.subAddress} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
            </div>
            <div className="input-container">
                PostalCode:
                <input 
                type="text" 
                name="subPostalCode" 
                value={subscriberForm.subPostalCode} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                /> 
            </div>
            <div className="input-container">
                Prenumerationsnummer: 
                <input 
                type="text" 
                name="subPrenNr"
                value={subscriberForm.subPrenNr} 
                onChange={(event) => inputChange('subscriberForm', event)} 
                readOnly/> 
            </div>
            <button onClick={adForm}>Gå till Skapa annons</button>
            </label>
        </React.Fragment>
    ); 
}
export default SubscriberForm