import React from 'react';
import {
    FirstName,
    LastName,
    EmailInput,
    ZipInput,
    StateSelect,
    SubmitBtn,
} from './form-inputs';
import SuccessInfo from './success-info/success-info.component';
import './contact-form.style.css';

class ContactForm extends React.Component{
    
    state={
        validInputs: [],
        sending: false,
        sent: false,
        success: false,
        savedValues: false
    }
    setInputValid=(inputName)=>{
        if(!this.state.validInputs.includes(inputName)){
            const validInputs = [...this.state.validInputs, inputName];
            this.setState({ validInputs });
        }
    }
    setInputInvalid=(inputName)=>{
        if(this.state.validInputs.includes(inputName) ){
            const validInputs = this.state.validInputs.filter(
                name=> name !== inputName
            )
            this.setState({ validInputs });
        }
    }
    saveInfo=(e)=>{
        e.preventDefault();
        this.setState({
            sending: true
        });
        
        const firstName =  e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const state = e.target.state.value;
        const zipCode = e.target.zipCode.value;
        const savedValues = {
            firstName,
            lastName,
            email,
            state,
            zipCode
        };

        // Mimics async
        setTimeout(
            ()=>{
                this.setState({ 
                    savedValues,
                    sending: false,
                    sendSuccess: true
                });        
            }, 3000
        );
        
    }
    
    render(){
        const formReady = (this.state.validInputs.length === 5);

        if(this.state.sendSuccess){
            return (
                <SuccessInfo 
                data={this.state.savedValues}
                />
            )
        }

        if(this.state.sending){
            return (
                <div 
                style={{
                    margin: "20px 0",
                    textAlign: "center",
                    fontSize: "35px"
                }}>
                    <i className="fa fa-spinner fa-spin"/>
                </div>
            )
        }

        return (
            <div>
                <form 
                id="contact-form"
                onSubmit={this.saveInfo}
                >
                    <FirstName
                    setInputValid={this.setInputValid}
                    setInputInvalid={this.setInputInvalid}
                    validInputNames={this.state.validInputs}
                    />

                    <LastName
                    setInputValid={this.setInputValid}
                    setInputInvalid={this.setInputInvalid}
                    validInputNames={this.state.validInputs}
                    />

                    <EmailInput
                    setInputValid={this.setInputValid}
                    setInputInvalid={this.setInputInvalid}
                    validInputNames={this.state.validInputs}
                    />

                    <StateSelect 
                    setInputValid={this.setInputValid}
                    setInputInvalid={this.setInputInvalid}
                    validInputNames={this.state.validInputs}
                    />

                    <ZipInput 
                    setInputValid={this.setInputValid}
                    setInputInvalid={this.setInputInvalid}
                    validInputNames={this.state.validInputs}
                    />

                    <SubmitBtn 
                    disabled={!formReady}
                    valid={formReady}
                    />

                </form>
            </div>
        )
    }
}

export default ContactForm;

/*





*/