import React from 'react';
import './item-wrapper.style.css';

const ItemWrapper = (props)=>(
    <div 
    {...props}
    className={"skill-carousel-item-wrapper " + (props.className || "")}>
        {props.children}
    </div>
)

export default ItemWrapper;