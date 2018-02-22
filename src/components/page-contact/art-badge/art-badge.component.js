import React from 'react';
import { logoSVG as redsFace } from '../../_images';
import './art-badge.style.css';
const ArtBadge = ()=>(
    <div
    className="art-of-reds-face"
    >
        <img src={redsFace} alt="Art of Red" />
    </div>
)

export default ArtBadge;