import React from 'react';
import PropTypes from 'prop-types';
import './display-input-message.style.css';

const DisplayInputMessage = (props)=>(
    <div className="input-message-wrapper">
        {   // If loading
            props.loading ? 
                <span>
                    <i className="fa fa-spinner fa-spin"></i>
                </span> :
            // If there's an error message
            props.badMessage ?
                <span className="text-bad">
                    <i className="fa fa-times" />
                    {props.badMessage}
                </span> :
            // If there's a success message
            props.goodMessage ?
                <span className="text-good">
                    <i className="fa fa-check" />
                    {props.goodMessage}
                </span> : 
            // Default
            (props.defaultText || "")
        }
    </div>
)

DisplayInputMessage.propTypes = {
    loading: PropTypes.bool.isRequired,
    goodMessage: PropTypes.string.isRequired,
    badMessage: PropTypes.string.isRequired,
    defaultText: PropTypes.string
}

export default DisplayInputMessage;