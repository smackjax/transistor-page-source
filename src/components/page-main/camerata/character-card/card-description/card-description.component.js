import React from 'react';
import './card-description.style.css';

const CardDescription = (props)=>(
    <div 
    {...props}
    className={"character-card-description " + (props.className || "")}
    >
        {props.children}
    </div>
)


export default CardDescription;