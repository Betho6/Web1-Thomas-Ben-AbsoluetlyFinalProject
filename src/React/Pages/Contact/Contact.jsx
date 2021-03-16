import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ContactForm from './ContactForm.jsx'
import EmailForm from './EmailForm.jsx'

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <div className="FullWidth">
                <img src="../../../assets/img/intouch.jpg" alt=""/>
            </div>
            
            <h1>Stay in the Know!</h1>
            <EmailForm/>

            <h1>Get in Touch with us!</h1>
            <ContactForm/> 
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

background-color:black;
color:white;
padding: 0px;
margin: 0px;

    
`;