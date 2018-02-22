import React from 'react';
import PropTypes from 'prop-types';
import HandleMessages from '../_HOC-handle-message/handle-message';
import InputWrapper from '../_input-with-message-wrapper/input-with-message-wrapper.component';
import RegexInput from '../_regex-input/regex-input.component';
import InputMessage from '../_display-input-message/display-input-message.component';

// used to identify input for validity
const inputName="zipCode";
const labelTxt = "Zip Code";

const toZipUrl=(zipCode)=>`https://api.zippopotam.us/us/${zipCode}`

class ZipInput extends React.Component {

    handleChange=(e)=>{
        // Clears any pending search;
        this.clearZipSearch();
        this.props.setInputInvalid(inputName);
        // Resets input messages
        this.props.setLoading(false);
        this.props.clearMessages();

        const regexValid = e.target.isValid;
        const zip = e.target.value;

        if(!regexValid && zip.length > 0) this.props.setBadMessage("Only numbers allowed");
        if(regexValid && zip.length === 5) {
            // Always sets input as valid if length and regex valid.
            // There's just too many edge cases.
            this.props.setInputValid(inputName);   
            this.searchForZip(zip);
        }
    }

    // Sets delay for searching zipcodes
    searchForZip=(zipCode)=>{
        this.props.setLoading(true);
        this.zipSearch = setTimeout(()=>{
            //search for zip
            fetch(toZipUrl(zipCode))
            .then(response=>{
                if(response.status === 200) this.props.setGoodMessage("Zip found");
                if(response.status === 404) this.props.setBadMessage("Make sure zip is right");
            })
            .catch(err=>{
                console.log("Error searching zips", err);
                this.props.setBadMessage("Error searching for zip");
            })
            .then(always=>{
                this.props.setLoading(false);
            })
        }, 1000);
    }

    clearZipSearch=()=>{
        clearTimeout(this.zipSearch);
    }
    
    render(){
        const { loading, goodMessage, badMessage, validInputNames} = this.props;   
        const valid = validInputNames.includes(inputName);
        
        return (
            <InputWrapper>
                <label>
                    { !valid ? <i className="fa fa-asterisk" /> : "" }
                    { labelTxt }
                </label>

                <RegexInput
                type="text"
                name={inputName}
                required={true}
                maxLength="5"
                regex={/^[0-9]+$/}
                onChange={this.handleChange}
                />
                
                <InputMessage 
                loading={loading}
                goodMessage={goodMessage}
                badMessage={badMessage}
                />
            </InputWrapper>
        )
    }
}

ZipInput.propTypes={
    setInputValid: PropTypes.func.isRequired,
    setInputInvalid: PropTypes.func.isRequired,
    validInputNames: PropTypes.array,

    // From HOC
    loading: PropTypes.bool.isRequired,
    goodMessage: PropTypes.string.isRequired,
    badMessage: PropTypes.string.isRequired,
    setLoading: PropTypes.func.isRequired,
    setBadMessage: PropTypes.func.isRequired,
    setGoodMessage: PropTypes.func.isRequired,
    clearMessages: PropTypes.func.isRequired
}

export default HandleMessages(ZipInput);