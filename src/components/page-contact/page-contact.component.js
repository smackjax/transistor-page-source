import React from 'react';
import RedsFace from './art-badge/art-badge.component';
import ContactForm from './contact-form/contact-form.component';
import {running} from './_background-images';
const overlayColor1 = "rgba(255,255,255,.7)";
const overlayColor2 = "rgba(255,255,255,.5)";
const background = `linear-gradient(${overlayColor1}, ${overlayColor2}), url('${running}')`;

const ContactPage = (props)=>(
    <content 
    style={{
        background: background,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: 'center'
    }}
    className="page contact">

        <RedsFace />
        <ContactForm />
    </content>
)

export default ContactPage;