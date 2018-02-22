import React from 'react';
import './submit.style.css';

const SubmitBtn = ({valid, ...rest})=>(    
    <button
    {...rest}
    className="contact-submit-btn"
    >
        {   // Icon state
            valid ?
            <i className="fa fa-check" /> :
            <i className="fa fa-asterisk" />
        }
        
        { // Text state
            valid ? "SUBMIT" : "Not ready" }
    </button>
)

export default SubmitBtn;