import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm from '../../Shared/UniversalForm/UniversalForm.jsx'

/* Scripts ---------------------------*/
import { contactFields } from '../../../common/formData.js'


const ContactForm = () => {

    return (
        <ContactFormStyled className='ContactForm'>
            <UniversalForm fields={ contactFields } />
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    max-width:500px;


`;