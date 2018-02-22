import React from 'react';
import SectionBlock from '../_section/section.component';
import { transistorBackground, transistorLogoDark} from '../../_images';
import junkText from './lorem-ipsum';
import './text-example.style.css';

const overlayColor = 'rgba(255,255,255,.7)';
const background = 
    `linear-gradient(${overlayColor}, ${overlayColor}),` + 
    `url('${transistorBackground}') ` ;

const TextExample = (props)=>(    
    <SectionBlock
    style={{
        background,
        backgroundSize: 'cover',
        backgroundPositionX: "center", 
        backgroundRepeat: 'no-repeat'
    }}
    className="block-with-text"
    >
        <div className="inner-content">
            <div className="description-container">
                <h3
                style={{
                    marginBottom: "10px"
                }}
                >
                    <span className="text-red">TRANSISTOR || </span>
                    <span className="smaller">Still great</span> 
                </h3>
                { junkText }
            </div>

            <div className="img-container">
                <img 
                src={ transistorLogoDark } 
                alt="Transistor logo"
                className="transistor-logo"
                />
            </div>
        </div>
    </SectionBlock>
)


export default TextExample;