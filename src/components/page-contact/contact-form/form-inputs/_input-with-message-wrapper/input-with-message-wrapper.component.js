import React from 'react';
import './input-with-message-wrapper.style.css';

const ContactInputWrapper = (props)=>(
    <div
    {...props}
    className={"contact-input-wrapper " + (props.className || "")}
    >
        {props.children}
    </div>
)


export default ContactInputWrapper;