import React from 'react';
import './item-description.style.css';
const ItemDescription = (props)=>(
    <div
    {...props}
    className={"skill-carousel-item-description " + (props.className || "")}
    >
        {props.children}
    </div>
)

export default ItemDescription;