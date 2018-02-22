import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../_input-with-message-wrapper/input-with-message-wrapper.component';
import statesData from './stateData.js';


// used to identify input for validity
const inputName="state";
const labelTxt = "Select State"

class StatesSelect extends React.Component {

    handleChange=()=>{
        this.props.setInputValid(inputName)
    }
    
    render(){
        const stateCodes = Object.keys(statesData);

        const { validInputNames } = this.props;   
        const valid = validInputNames.includes(inputName);

        return (
            <InputWrapper>
                <label>
                    { !valid ? <i className="fa fa-asterisk" /> : "" }
                    {labelTxt}
                </label>

                <select
                required={true}
                name={inputName}
                defaultValue=""
                onChange={this.handleChange}
                >
                    <option
                    value=""
                    disabled={true}
                    >
                        Select a state
                    </option>
                    { // outputs each state item
                        stateCodes.map(code=>(
                            <option
                            key={code}
                            value={code}
                            >
                                {statesData[code]} ({code})
                            </option>
                        ))
                    }
                </select>
            </InputWrapper>
        )
    }
}

StatesSelect.propTypes={
    setInputValid: PropTypes.func.isRequired,
    setInputInvalid: PropTypes.func.isRequired,
    validInputNames: PropTypes.array
}

export default StatesSelect;