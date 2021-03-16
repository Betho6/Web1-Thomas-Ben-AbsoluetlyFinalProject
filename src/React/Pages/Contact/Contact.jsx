import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../../../common/media_queries.js';
/* Components ---------------------------*/
import ContactForm from './ContactForm.jsx'
import EmailForm from './EmailForm.jsx'

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <div>
                <img src="../../../assets/img/mission.jpg" alt="Someone Pouring Beer"/>            
                <h1>Stay in the Know!</h1>
                <EmailForm/>
            </div>
            <div>
                <h1>Get in Touch with us!</h1>
                <ContactForm/> 
                <img src="../../../assets/img/intouch.jpg" alt="Friendly People Who'd love to serve you"/>            
            </div>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
display: block;
background-color:black;
color:white;

@media ${mq.tablet}{
    display: block;
}

@media ${mq.desktop}{
    display: flex;
}

`;