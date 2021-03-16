import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm from '../../Shared/UniversalForm/UniversalForm.jsx'

/* Scripts ---------------------------*/
import { loginFields } from '../../../common/formData.js'

const EmailForm = () => {

    return (
        <EmailFormStyled className='EmailForm'>
            <UniversalForm fields={ loginFields } />
        </EmailFormStyled>
    );
}

export default EmailForm;

const EmailFormStyled = styled.div`
    max-width:500px;
    
`;