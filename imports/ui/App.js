import React, { Component } from 'react';
import Ad from './Ad.js';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Ads } from '../api/ads.js';
import CompanyForm from './CompanyForm.js';
import SubscriberForm from './SubscriberForm.js';
import AdForm from './AdForm.js';
import AdTableHead from './AdTableHead.js';
import SubscriberCheck from './SubscriberCheck.js';

class App extends Component {
    state = {
        showCompanyForm: false,
        showSubscriberForm: false,
        showAdForm: false,
        showAdTable: false,
        showSubCheck: false,
        subscriberCheck: {
            subFirstName: '',
            subLastName: '',
            subPersonNumber: '',
            subAddress: '',
            subPostalCode: '',
            subPrenNr: '',
        },

        companyForm: {
            compName: '',
            compOrg: '',
            compPhone: '',
            compAddress: '',
            compPostal: '',
            compInvoiceAddress: '',
            compInvoicePostalCode: '',
            compCity: '',
        },
        adForm: {
            adProductPrice: '',
            adContent: '',
            adTitle: '',
            adPrice: '',
            adAdvertiser: '',
        },
        subscriberForm: {
            subNr: '',
        }
    };
    componentDidMount = () => {
        this.getData()
    }
    getData = () => {
        fetch(`http://localhost:3002/subs?prenNr=${this.state.subscriberForm.subNr}`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json()
        .then(json => {
            json.map(subscriber => {
                this.setState({
                    showCompanyForm: false,
                    showSubscriberForm: false,
                    showAdForm: false,
                    showAdTable: false,
                    showSubCheck: true,
                    subscriberCheck: {
                        subFirstName: subscriber.sub_fornamn,
                        subLastName: subscriber.sub_efternamn,
                        subPersonNumber: subscriber.sub_personNr,
                        subPostalCode: subscriber.sub_postNr,
                        subAddress: subscriber.sub_utAddr,
                        subPrenNr: subscriber.sub_prenNr,
                    }
                })
            }) 
        }))
        .catch(err => console.log(err))
    }
    updateData = () => {
        fetch(`http://localhost:3002/update?prenNr=${this.state.subscriberForm.subNr}&subFirstName=${this.state.subscriberCheck.subFirstName}&subLastName=${this.state.subscriberCheck.subLastName}&subPersonNumber=${this.state.subscriberCheck.subPersonNumber}&subAddress=${this.state.subscriberCheck.subAddress}&subPostalCode=${this.state.subscriberCheck.subPostalCode}`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json()
        .then(json => {
            // json.map(subscriber => {
            //     this.setState({
            //         showCompanyForm: false,
            //         showSubscriberForm: false,
            //         showAdForm: false,
            //         showAdTable: false,
            //         showSubCheck: true,
            //         subscriberCheck: {
            //             subFirstName: subscriber.sub_fornamn,
            //             subLastName: subscriber.sub_efternamn,
            //             subPersonNumber: subscriber.sub_personNr,
            //             subPostalCode: subscriber.sub_postNr,
            //             subAddress: subscriber.sub_utAddr,
            //             subPrenNr: subscriber.sub_prenNr,
            //         }
            //     })
            // }) 
            console.log("HEJ");
        }))
        .catch(err => console.log(err))
    }


    renderAdTable = () => {
        this.setState({
            showCompanyForm: false,
            showSubscriberForm: false,
            showAdForm: false,
            showAdTable: true,
            showSubCheck: false,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const ad_rubrik = this.state.adForm.adTitle
        const ad_varans_pris = this.state.adForm.adProductPrice
        const ad_innehall = this.state.adForm.adContent
        const ad_pris = this.state.adForm.adPrice
        
            Ads.insert({
                ad_rubrik,
                ad_varans_pris,
                ad_innehall,
                ad_pris,
            });
            this.renderAdTable();
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
            showSubCheck: false,
            showAdForm: !this.state.showAdForm,
        });
    }
    showAdForm2 = () => {
        this.setState({
            showCompanyForm: false,
            showSubscriberForm: false,
            showSubCheck: false,
            showAdForm: !this.state.showAdForm,
        });
        this.updateData();
    }
    
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
                { this.state.showSubscriberForm && <SubscriberForm inputChange={this.handleInputChange} submitForm={this.getData} /> }
                { this.state.showAdForm && <AdForm inputChange={this.handleInputChange} submitAd={this.handleSubmit}/> }
                { this.state.showSubCheck && <SubscriberCheck inputChange={this.handleInputChange} adForm={this.showAdForm2} subscriberCheck={this.state.subscriberCheck}/> }
                
                </ul>
                
                <table>
                    { this.state.showAdTable && < AdTableHead /> }   
                    <tbody>
                    { this.state.showAdTable && this.renderAds() }
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