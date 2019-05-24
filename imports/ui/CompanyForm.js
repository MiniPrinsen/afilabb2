import React from 'react';


const CompanyForm = ({ adForm, inputChange }) =>  {
    return (
        <React.Fragment>
            <label>
                <div>
                    Namn:
                    <input 
                    type="text" 
                    name="compName" 
                    required="required"
                    onChange={(event) => inputChange('companyForm', event)} 
                    /> 
                    
                </div>
                <br/>
                <div>
                Organisationsnummer: 
                <input 
                type="text" 
                name="compOrg" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                </div>
                <br/>
                Telefonnummer:
                <input 
                type="text" 
                name="compPhone" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/>
                Utdelningsadress:
                <input 
                type="text" 
                name="compAddress" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/>
                Postnummer: 
                <input 
                type="text" 
                name="compPostal" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/> 
                Ort: 
                <input 
                type="text" 
                name="compCity" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/> 
                <br/>

                <b>Faktureringsadress: </b> 
                <br/>
                Utdelningsadress: 
                <input 
                type="text" 
                name="compInvoiceAddress" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/>
                Postnummer: 
                <input 
                type="text" 
                name="compInvoicePostalCode" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/>
                Ort: 
                <input 
                type="text" 
                name="compInvoiceCity" 
                onChange={(event) => inputChange('companyForm', event)} 
                /> 
                <br/>
            </label>
            <button onClick={adForm}></button>
        </React.Fragment>
    ); 
}
export default CompanyForm