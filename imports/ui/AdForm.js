import React, { Component } from 'react';
import App from './App.js';

export default class SubscriberForm extends Component {
    render() {
        const { inputChange } = this.props
        return (
       <React.Fragment>
            <input 
                type="text"
                ref="textInput"
                placeholder="Varans namn"
                onChange={(event) => inputChange('adForm', event)}
                />
        </React.Fragment>
 
        );
    }
}