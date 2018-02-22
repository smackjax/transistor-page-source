import React from 'react';
import PropTypes from 'prop-types';

class RegexInput extends React.Component{
    state={ value: "" }

    handleChange=(e)=>{
        const value = e.target.value;
        const isValid = this.props.regex.test(value);
        e.target.isValid = isValid;
        this.setState({ value });
        if(this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render(){
        const {regex, ...rest} = this.props;
        return (
            <input
            {...rest}
            onChange={this.handleChange}
            className={"regex-input " + (this.props.className || "")}
            />
        )
    }
}

RegexInput.propTypes = {
    regex: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RegexInput;