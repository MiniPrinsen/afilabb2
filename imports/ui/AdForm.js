import React, { Component } from 'react';

 const AdForm = ({submitAd, inputChange, adForm }) => {
        return (
       <React.Fragment>
                <label>
                <h2>Skapa annons</h2>
                <div className="input-container">
                        Rubrik:
                        <input type="text"
                         name="adTitle" 
                         autocomplete="off"
                         onChange={(event) => inputChange('adForm', event)} /> <br/>
                </div>
                <div className="input-container">
                        Varans pris:
                        <input type="text"
                         name="adProductPrice"
                         autocomplete="off"
                        onChange={(event) => inputChange('adForm', event)} /> <br/>
                </div>
                <div className="input-container">
                        Innehåll:
                        <input type="text"
                         name="adContent"
                         autocomplete="off"
                        onChange={(event) => inputChange('adForm', event)} /> <br/>
                </div>
                <div className="input-container">
                        Annonspris:
                        <input type="text"
                         name="adPrice"
                         placeholder={adForm.adPrice}
                         readOnly
                          onChange={(event) => inputChange('adForm', event)} /> <br/>
                </div>
                <button onClick={submitAd}>Publicera annons</button>
                </label>             
        </React.Fragment> 
        );
}
export default AdForm