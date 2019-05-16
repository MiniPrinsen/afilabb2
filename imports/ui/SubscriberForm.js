import React, { Component } from 'react';

export default class SubscriberForm extends Component {
    render() {
        return (
            <form>
                <label>
                    Prenumerationsnummer:
                    <input type="text" name="name" /> <br/>
                </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}