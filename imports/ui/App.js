import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Ads, Companies } from '../api/ads.js';

import Ad from './Ad.js';
import AdForm from './AdForm.js';
import AdTableHead from './AdTableHead.js';
import CompanyForm from './CompanyForm.js';
import SubscriberForm from './SubscriberForm.js';
import SubscriberSearch from './SubscriberSearch.js';
import { Mongo } from 'meteor/mongo';
import SimpleReactValidator from 'simple-react-validator';


class App extends Component {
    state = {
        showAdForm: false,
        showAdTable: false,
        showCompanyForm: false,
        showSubscriberForm: false,
        showSubscriberSearch: false,
        isCompany: false,
           
        subscriberForm: {
            subId: '',
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
            compCity: '',

            compInvoiceAddress: '',
            compInvoicePostalCode: '',
            compInvoiceCity: '',
        },
        adForm: {
            adTitle: '',
            adProductPrice: '',
            adContent: '',
            adPrice: '',
            adAdvertiser: '',
        },
        subscriberSearch: {
            subSearchNr: '',
        }
    };
    componentWillMount() {
        this.validator = new SimpleReactValidator();
    }
    // componentDidMount = () => {
    //     this.getData()
    // }

    getData = () => {
        fetch(`http://localhost:3002/subs?prenNr=${this.state.subscriberSearch.subSearchNr}`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json()
        .then(json => {
            if(json != '') {
            json.map(subscriber => {
                this.setState({
                    showAdForm: false,
                    showAdTable: false,
                    showCompanyForm: false,
                    showSubscriberSearch: false,
                    
                    showSubscriberForm: true,
                    subscriberForm: {
                        subId: subscriber._id,
                        subFirstName: subscriber.sub_fornamn,
                        subLastName: subscriber.sub_efternamn,
                        subPersonNumber: subscriber.sub_personNr,
                        subPostalCode: subscriber.sub_postNr,
                        subAddress: subscriber.sub_utAddr,
                        subPrenNr: subscriber.sub_prenNr,
                    }
                })
            }) 
        } else {
            alert("Prenumerationsnumret finns inte registrerat i systemet.")
        }
        }))
        .catch(err => console.log(err))
    }

    updateData = () => {
        this.setState({
            adForm: {
                adPrice: '0 kr'
            },
            isCompany: false,
          });
           var name = this.state.subscriberForm.subFirstName;
        try {
            Ads.find({sub_id: this.state.subscriberForm.subId}).forEach(function(singleDoc) {
                var searchId = singleDoc._id
                Ads.update({_id: searchId}, { $set: { ad_annonsor: name } })
            })  
        } catch(e) {
                console.log("error: ", e);
            }
          
          
        this.showAdForm()
        fetch(`http://localhost:3002/update?prenNr=${this.state.subscriberSearch.subSearchNr}&subFirstName=${this.state.subscriberForm.subFirstName}&subLastName=${this.state.subscriberForm.subLastName}&subPersonNumber=${this.state.subscriberForm.subPersonNumber}&subAddress=${this.state.subscriberForm.subAddress}&subPostalCode=${this.state.subscriberForm.subPostalCode}`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json()
        .then(json => {
            console.log("Uppdaterar data: ", json)
        }))
        .catch(err => console.log(err))
    }

    renderAdTable = () => {
        this.setState({
            showAdForm: false,
            showCompanyForm: false,
            showSubscriberForm: false,
            showSubscriberSearch: false,
            
            showAdTable: true,
        });
    }

    insertCompany = (event) => {
        this.setState({
          isCompany: true,
          adForm: {
            adPrice: '40 kr'
        }
        });
        const comp_name = this.state.companyForm.compName;
        const comp_phone = this.state.companyForm.compPhone;
        const comp_address = this.state.companyForm.compAddress;
        const comp_postal = this.state.companyForm.compPostal;
        const comp_invoice_address = this.state.companyForm.compInvoiceAddress;
        const comp_invoice_postal = this.state.companyForm.compInvoicePostalCode;
        const comp_city = this.state.companyForm.compCity;
        const comp_org = this.state.companyForm.compOrg;
        const comp_invoice_city = this.state.companyForm.compInvoiceCity;

        // this.validator.message('compName', comp_name, 'required|alpha')
        // this.validator.message('compPhone', comp_phone, 'required|numeric')
        // this.validator.message('compOrg', comp_org, 'required|numeric')
        // this.validator.message('compAddress', comp_address, 'required|alpha_num_space')
        // this.validator.message('compInvoiceAddress', comp_invoice_address, 'required|alpha_num_space')
        // this.validator.message('compInvoicePostalCode', comp_invoice_postal, 'required|numeric')
        // this.validator.message('compCity', comp_city, 'required|alpha')
        // this.validator.message('compPostal', comp_postal, 'required|numeric')

        // if(this.validator.allValid()) {
        //     alert("Company submitted");
        // } else {
        //     this.validator.showMessages();
        //     this.forceUpdate();
        // }

        

        Companies.insert({
            comp_name,
            comp_phone,
            comp_address,
            comp_postal,
            comp_city,
            comp_invoice_address,
            comp_invoice_postal,
            comp_invoice_city,
            comp_org,
        })
        this.showAdForm();
    }

    insertAd = (event) => {
        event.preventDefault();

        var comp_id = '';
        var sub_id = '';
        var ad_pris = this.state.adForm.adPrice;
        var ad_annonsor = ''

        if(this.state.isCompany) {
            var data = Companies.findOne({comp_name: this.state.companyForm.compName});
            comp_id = data._id;
            console.log("Company ID: ", comp_id);
            ad_annonsor = 'Företag: ' + data.comp_name;
        }
        else {
            sub_id = this.state.subscriberForm.subId;
            ad_annonsor = this.state.subscriberForm.subFirstName;
            console.log("Det här är en privatperson: ", sub_id);
        }
       
        const ad_rubrik = this.state.adForm.adTitle
        const ad_innehall = this.state.adForm.adContent
        const ad_varans_pris = this.state.adForm.adProductPrice
        //const _id = ObjectId(this.state.subscriberForm.subId);

        
        console.log("company id: ", comp_id);
        
        
            Ads.insert({
                ad_rubrik,
                ad_varans_pris,
                ad_innehall,
                ad_pris,
                comp_id,
                sub_id,
                ad_annonsor,
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
            showSubscriberSearch: false,
        });
    }

    toggleSubscriberCompleted = (e) => {
        this.setState({
            showCompanyForm: false,
            showSubscriberSearch: !this.state.showSubscriberSearch,
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
            showSubscriberSearch: false,
            showSubscriberForm: false,
            showAdForm: !this.state.showAdForm,
        });
    }
    
    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href='./main.html'>
                                <button>Registrera/Logga in</button>
                            </a>
                        </li>
                        <li>
                            <button onClick={this.renderAdTable}>Visa annonser</button>
                        </li>
                    </ul>
                </nav>
                <h1>Annonseringssystem</h1>
                <form>
                    <div className="input-container">
                        <input 
                        type="radio" 
                        name="advertiser" 
                        value="company" 
                        onChange={this.toggleCompanyCompleted}
                        />
                        Registrera företag
                    </div>
                    <div className="input-container">
                        <input 
                        type="radio" 
                        name="advertiser" 
                        value="private" 
                        onChange={this.toggleSubscriberCompleted}
                        /> 
                        Logga in prenumerant
                    </div>
                </form>
                    { this.state.showCompanyForm && <CompanyForm inputChange={this.handleInputChange} adForm={this.insertCompany}/> }
                    { this.state.showSubscriberSearch && <SubscriberSearch inputChange={this.handleInputChange} submitForm={this.getData} /> }
                    { this.state.showAdForm && <AdForm inputChange={this.handleInputChange} submitAd={this.insertAd} adForm={this.state.adForm}/> }
                    { this.state.showSubscriberForm && <SubscriberForm inputChange={this.handleInputChange} adForm={this.updateData} subscriberForm={this.state.subscriberForm}/> }   
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