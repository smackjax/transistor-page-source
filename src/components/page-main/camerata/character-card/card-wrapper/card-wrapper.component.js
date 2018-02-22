import React from 'react';
import './card-wrapper.style.css';

const CardWrapper = (props)=>(
    <div
    {...props}
    className={"character-card-wrapper " + (props.className || "")}
    >
        {props.children}
    </div>
)

export default CardWrapper;