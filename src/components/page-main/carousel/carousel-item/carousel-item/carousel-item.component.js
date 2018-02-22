import React from 'react';
import PropTypes from 'prop-types';

import {
    ItemWrapper,
    ItemPic,
    ItemDescription
} from '../index'
const CarouselItem = (props)=>(
    <ItemWrapper>
        <ItemPic 
        src={props.imgSrc}
        alt={props.alt}
        />
        
        <ItemDescription>
            {props.description}
        </ItemDescription>
    </ItemWrapper>
)


CarouselItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string, PropTypes.object
    ]).isRequired
}

export default CarouselItem;