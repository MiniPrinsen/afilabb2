import React, { Component } from 'react';

 const AdForm = ({submitAd, inputChange }) => {
        return (
       <React.Fragment>
               <input  
               type="text"
               name="adTitle"
               placeholder="Rubrik" 
               onChange={(event) => inputChange('adForm', event)}
                /> 
                <br/>
                <input 
                type="text"
                name="adProductPrice" 
                placeholder="Varans pris" 
                onChange={(event) => inputChange('adForm', event)}
                /> 
                <br/>
                 <input  
                 type="text" 
                 name="adContent" 
                 placeholder="Innehåll" 
                 onChange={(event) => inputChange('adForm', event)}
                /> 
                <br/>  
                 <input type="text" 
                 name="adPrice" 
                 placeholder="Annonspris (40 eller 0, statiskt)" 
                 onChange={(event) => inputChange('adForm', event)}
                /> 
                <br/>
                <button onClick={submitAd}></button>
        </React.Fragment> 
        );
}
export default AdForm