import React from 'react';
import App from './App.js';
import { Meteor } from 'meteor/meteor';

const CompanyForm = ({ adForm, inputChange }) =>  {
    return (
        <React.Fragment>
            <label>
                Namn:
                <input type="text" name="name" onChange={(event) => inputChange('companyForm', event)} /> <br/>
                Organisationsnummer: 
                <input type="text" name="org" onChange={(event) => inputChange('companyForm', event)} /> <br/>
                Telefonnummer:
                <input type="text" name="phone" onChange={(event) => inputChange('companyForm', event)} /> <br/>
                Utdelningsadress:
                <input type="text" name="address" onChange={(event) => inputChange('companyForm', event)} /> <br/>
                Postnummer: 
                <input type="text" name="postal" onChange={(event) => inputChange('companyForm', event)} /> <br/> <br/>

                <b>Faktureringsadress: </b> <br/>
                Utdelningsadress: 
                <input type="text" name="invoice-address" onChange={(event) => inputChange('companyForm', event)} /> <br/>
                Postnummer: 
                <input type="text" name="invoice-postal-code" onChange={(event) => inputChange('companyForm', event)} /> <br/>
                Ort: 
                <input type="text" name="city" onChange={(event) => inputChange('companyForm', event)} /> <br/>
            </label>
            <button onClick={adForm}></button>
        </React.Fragment>
    ); 
}
export default CompanyForm