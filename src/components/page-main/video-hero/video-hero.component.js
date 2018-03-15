import React from 'react';
import "./video-hero.style.css";

// autoplay=1&
const parameters = `
autoplay=1&
mute=1&
modestbranding=1&
autohide=1&
controls=0&
showinfo=0&
rel=0&
frameborder=0&
allowFullscreen&
playlist=GTik6sYT_BE&
loop=1
`;

const VideoHero = ()=>(
    <section className="hero-vid-wrapper">
        <div className="vid-height-limiter">
            <iframe 
            id="hero-vid"
            title="Transistor Trailer video"
            frameBorder="0" 
            allowFullScreen="1" 
            src={`https://www.youtube.com/embed/GTik6sYT_BE?${parameters}`} />    
            <div 
            className="video-overlay-dark"
            aria-hidden={true}>
            </div>
        </div>

        <div className="vid-cta-block">
            <div className="title-wrapper">
                <h2 className="title text-techy">
                <span className=" text-red">|</span> 
                - TRANSISTOR -
                <span className=" text-red">|</span>
                </h2>
                <h3 className="description">
                    <span className="text-med-gray">An awesome game</span>
                </h3>
            </div>
            <a 
            href="https://www.youtube.com/watch?v=GTik6sYT_BE" 
            target="_blank"
            rel="noopener noreferrer" 
            className=" btn trailer-btn">
                SEE TRAILER
                <i className="fa fa-chevron-right"/>
            </a>
        </div>

    </section>
)

export default VideoHero;

/* */