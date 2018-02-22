import React from 'react';
import './section.style.css';

const PageSection = (props)=>{
    return (
        <section
        {...props}
        className={"page-section-block " + (props.className || "" )}
        >
            {props.children}
        </section>
    )
}

export default PageSection;