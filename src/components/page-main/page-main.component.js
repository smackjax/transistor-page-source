import React from 'react';
import VideoHero from './video-hero/video-hero.component';
import TextExample from './text-example/text-example.component';
import Camerata  from './camerata/characters.component';
import Carousel from './carousel/carousel.component';

const MainPage = (props)=>(
    <content className="page">
        <VideoHero />
        <TextExample />
        <Camerata />
        <Carousel />
    </content>
)

export default MainPage;