import React, { Component } from 'react';

 const AdForm = ({submitAd, inputChange, adForm }) => {
        return (
       <React.Fragment>
                <label>
                        Rubrik:
                        <input type="text"
                         name="adTitle" 
                         onChange={(event) => inputChange('adForm', event)} /> <br/>
                </label>
                <br />
                <label>
                        Varans pris:
                        <input type="text"
                         name="adProductPrice"
                          onChange={(event) => inputChange('adForm', event)} /> <br/>
                </label>
                <br />
                <label>
                        Innehåll:
                        <input type="text"
                         name="adContent"
                          onChange={(event) => inputChange('adForm', event)} /> <br/>
                </label>
                <br />
                <label>
                        Annonspris(40 för företag, 0 för privatperson):
                        <input type="text"
                         name="adPrice"
                         placeholder={adForm.adPrice}
                         readOnly
                          onChange={(event) => inputChange('adForm', event)} /> <br/>
                </label>
                <br />
 
                <button onClick={submitAd}></button>
        </React.Fragment> 
        );
}
export default AdForm