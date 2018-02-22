import React from 'react';
import SectionBlock from '../_section/section.component';
import initializeCarousel from './initialize-carousel';
// Image srcs
import {
    Bounce,
    Breach,
    Crash,
    Cull,
    Help,
    Jaunt,
    Load,
    Mask,
    Ping,
    Purge,
    Spark,
    Switch,
    Void
} from '../../_function-images';

import {
    CarouselItem
} from './carousel-item';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.style.css';

// Carousel initialized on mount in HOC
const TransistorCarousel = ()=>(
    <SectionBlock
    className="carousel-section-block"
    >
        <h2
        style={{
            marginBottom: "10px"
        }}
        >
            <span className="text-red">Funcs()</span>
        </h2>
        <div id="skill-carousel" className="owl-carousel owl-theme skill-carousel">
            <CarouselItem 
            imgSrc={Bounce}
            alt="Bounce Skill"
            description="Bounces between enemies" />

            <CarouselItem 
            imgSrc={Breach}
            alt="Breach Skill"
            description="The one you'll never get rid of" />

            <CarouselItem 
            imgSrc={Cull}
            alt="Cull Skill"
            description="Destroys. Everything." />

            <CarouselItem 
            imgSrc={Switch}
            alt="Switch Skill"
            description="Because there had to be one useless skill" />

            <CarouselItem 
            imgSrc={Spark}
            alt="Spark Skill"
            description="Electrifies attacks" />

            <CarouselItem 
            imgSrc={Crash}
            alt="Crash Skill"
            description={<span className="text-techy">System overload</span>} />

            <CarouselItem 
            imgSrc={Help}
            alt="Help Skill"
            description="I need one of these" />

            <CarouselItem 
            imgSrc={Jaunt}
            alt="Jaunt Skill"
            description="Now you see me..." />

            <CarouselItem 
            imgSrc={Load}
            alt="Load Skill"
            description="Some packages are best left unopened" />

            <CarouselItem 
            imgSrc={Mask}
            alt="Mask Skill"
            description="Ta-Daaaaa" />

            <CarouselItem 
            imgSrc={Ping}
            alt="Ping Skill"
            description="No doubt as annoying to them as it is in real life" />

            <CarouselItem 
            imgSrc={Purge}
            alt="Purge Skill"
            description="You might feel a slight discomfort in a couple minutes" />

            <CarouselItem 
            imgSrc={Void}
            alt="Void Skill"
            description="NO ARMOR FOR YOU" />

        </div>
    </SectionBlock>
)

// initializes carousel each time it mounts
export default initializeCarousel( TransistorCarousel );