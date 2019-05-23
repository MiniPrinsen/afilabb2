import React from 'react';
import App from './App.js';
import { Meteor } from 'meteor/meteor';

const SubscriberCheck = ({ adForm, inputChange, subscriberCheck }) =>  {
    return (
        <React.Fragment>
            <label>
                Förnamn:
                <input type="text" name="subFirstName" value={subscriberCheck.subFirstName} onChange={(event) => inputChange('subscriberCheck', event)} /> <br/>
                Efternamn: 
                <input type="text" name="subLastName" value={subscriberCheck.subLastName} onChange={(event) => inputChange('subscriberCheck', event)} /> <br/>
                Personnummer:
                <input type="text" name="subPersonNumber" value={subscriberCheck.subPersonNumber} onChange={(event) => inputChange('subscriberCheck', event)} /> <br/>
                Adress:
                <input type="text" name="subAddress" value={subscriberCheck.subAddress} onChange={(event) => inputChange('subscriberCheck', event)} /> <br/>
                PostalCode:
                <input type="text" name="subPostalCode" value={subscriberCheck.subPostalCode} onChange={(event) => inputChange('subscriberCheck', event)} /> <br/>
                Prenumerationsnummer: 
                <input type="text" name="subPrenNr" value={subscriberCheck.subPrenNr} onChange={(event) => inputChange('subscriberCheck', event)} readOnly/> <br/> <br/>
            </label>
            <button onClick={adForm}></button>
        </React.Fragment>
    ); 
}
export default SubscriberCheck