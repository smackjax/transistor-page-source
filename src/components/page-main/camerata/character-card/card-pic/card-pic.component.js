import React from 'react';
import PropTypes from 'prop-types';
import './card-pic.style.css';

const CardPic = (props)=>(
    <div
    className="character-card-pic-wrapper"
    >
        <img
        {...props}
        alt={props.alt}
        className={"character-card-pic " + (props.className || "")}
        />
    </div>
)

CardPic.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default CardPic;