import React from 'react';


const CompanyForm = ({ adForm, inputChange }) =>  {
    return (
        <React.Fragment>
            <label>
            <h2>Registrera företag</h2>
            <h3>Företagsinfo</h3>
                <div className="input-container">
                    Namn:
                    <input 
                    type="text" 
                    name="compName" 
                    autocomplete="off"
                    onChange={(event) => inputChange('companyForm', event)} 
                    />      
                </div>
                <div className="input-container">
                    Organisationsnummer: 
                    <input 
                    type="text" 
                    name="compOrg" 
                    autocomplete="off"
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                </div>
                <div className="input-container">
                    Telefonnummer:
                    <input 
                    type="text" 
                    name="compPhone" 
                    autocomplete="off"
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                </div>
                <div className="input-container">
                    Utdelningsadress:
                    <input 
                    type="text" 
                    name="compAddress" 
                    autocomplete="off"
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                </div>
                <div className="input-container">
                    Postnummer: 
                    <input 
                    type="text" 
                    name="compPostal"
                    autocomplete="off" 
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                </div>
                <br/>
                <h3>Faktureringsadress</h3>
                <div className="input-container">
                    Utdelningsadress: 
                    <input 
                    type="text" 
                    name="compInvoiceAddress" 
                    autocomplete="off"
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                </div>
                <div className="input-container">
                    Postnummer: 
                    <input 
                    type="text" 
                    name="compInvoicePostalCode"
                    autocomplete="off" 
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                </div>
                <div className="input-container">
                    Ort: 
                    <input 
                    type="text" 
                    name="compCity" 
                    autocomplete="off"
                    onChange={(event) => inputChange('companyForm', event)} 
                    />
                </div>
                <button onClick={adForm}>Gå till Skapa annons</button>
            </label>
            
        </React.Fragment>
    ); 
}
export default CompanyForm