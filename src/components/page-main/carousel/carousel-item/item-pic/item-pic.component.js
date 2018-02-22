import React from 'react';
import './item-pic.style.css';

const ItemPic = (props) =>(
    <img
    {...props}
    alt={props.alt}
    className="skill-carousel-item-pic"
    />
)

export default ItemPic;