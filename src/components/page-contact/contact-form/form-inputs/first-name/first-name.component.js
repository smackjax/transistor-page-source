import React from 'react';
import PropTypes from 'prop-types';
import HandleMessages from '../_HOC-handle-message/handle-message';
import InputWrapper from '../_input-with-message-wrapper/input-with-message-wrapper.component';
import RegexInput from '../_regex-input/regex-input.component';
import InputMessage from '../_display-input-message/display-input-message.component';

// used to identify input for validity
const inputName="firstName";
const labelTxt = "First Name"

class FirstName extends React.Component {

    componentDidMount(){
        this.props.setInputInvalid(inputName);
    }

    handleChange=(e)=>{
        this.props.setLoading(true);
        this.props.clearMessages();
        const regexValid = e.target.isValid;

        // If invalid and there is input
        if(!regexValid && e.target.value.length) this.props.setBadMessage("Onl1y letters allowed");

        // If invalid
        if(!regexValid) this.props.setInputInvalid(inputName);
        // If valid
        else this.props.setInputValid(inputName);
        
        this.props.setLoading(false);
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
                regex={/^[a-zA-Z]+$/}
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

FirstName.propTypes={
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

export default HandleMessages(FirstName);