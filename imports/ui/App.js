import React, { Component } from 'react';
import Ad from './Ad.js';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Ads } from '../api/ads.js';
import CompanyForm from './CompanyForm.js';
import SubscriberForm from './SubscriberForm.js';
import AdForm from './AdForm.js';
import AdTableHead from './AdTableHead.js';

class App extends Component {
    state = {
        showCompanyForm: false,
        showSubscriberForm: false,
        showAdForm: false,
        showAdTable: false,
        companyForm: {
            compName: '',
            compOrg: '',
            compPhone: '',
            compAddress: '',
            compPostal: '',
            compInvoiceAddress: '',
            compInvoicePostalCode: '',
            compCity: '',
             //ADD ALL INPUTS
        },
        adForm: {
            adProductPrice: '',
            adContent: '',
            adTitle: '',
            adPrice: '',
            adAdvertiser: '',


        }
    };

    renderAdTable = () => {
        this.setState({
            showCompanyForm: false,
            showSubscriberForm: false,
            showAdForm: false,
            showAdTable: true,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const ad_rubrik = this.state.adForm.adTitle
        const ad_varans_pris = this.state.adForm.adProductPrice
        const ad_innehall = this.state.adForm.adContent
        const ad_pris = this.state.adForm.adPrice
        // var ad_annonsor = ''

        // if(this.state.adForm.adAdvertiser == true) {
        //     ad_annonsor = 'Företag';
        // }
        // else {
        //     ad_annonsor = 'Privatperson';
        // }
        
            Ads.insert({
                ad_rubrik,
                ad_varans_pris,
                ad_innehall,
                ad_pris,
                // ad_annonsor,
            });
            //this.renderAdTable();
            this.renderAdTable();
        

       // ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
    
    handleInputChange = (form, event) => {
        this.setState({
            [form]: {
                ...this.state[form],
                [event.target.name]: event.target.value,
            } 
        }, () => {console.log(this.state[form])})
    }

    toggleCompanyCompleted = (e) => {
        this.setState({
            showCompanyForm: !this.state.showCompanyForm,
            showSubscriberForm: false,
        });
    }
    toggleSubscriberCompleted = (e) => {
        this.setState({
            showCompanyForm: false,
            showSubscriberForm: !this.state.showSubscriberForm,
        });
    }
    renderAds = () => {
        return this.props.ads.map((ad) => (
            <Ad key={ad._id} ad={ad}/>
        ));
    }

    showAdForm = () => {
        this.setState({
            showCompanyForm: false,
            showSubscriberForm: false,
            showAdForm: !this.state.showAdForm,
        });
    }
    // renderCompanyForm() {
    //     if(this.state.showCompanyForm == true) {
    //         return <CompanyForm />
    //     }
    // }
   
    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="main.html">Skapa annons</a></li>
                        <li><button onClick={this.renderAdTable}>Annonser</button></li>
                    </ul>
                </nav>
                <h1>Annonseringssystem</h1>
                <form>
                    <input type="radio" name="advertiser" value="company" onChange={this.toggleCompanyCompleted}/>
                        Företag
                    <br/>
                    <input type="radio" name="advertiser" value="private" onChange={this.toggleSubscriberCompleted}/> 
                        Privatperson 
                    <br/>
                </form>
                <ul>
                { this.state.showCompanyForm && <CompanyForm inputChange={this.handleInputChange} adForm={this.showAdForm}/> }
                { this.state.showSubscriberForm && <SubscriberForm /> }
                { this.state.showAdForm && <AdForm inputChange={this.handleInputChange} submitAd={this.handleSubmit}/> }
                
                </ul>
                
                <table>
                    { this.state.showAdTable && < AdTableHead /> }   
                    <tbody>
                    { this.state.showAdTable && this.renderAds() }
                    {/* {this.renderAds()} */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        ads: Ads.find({}).fetch(),
    };
})(App);