import React from 'react';
import styled from 'styled-components';

const Labels = ({theField}) => {
    
    if (!theField.errors || theField.errors.length < 1) { return''; }


    return (
        <LabelsStyled className='Labels'>
            Error
        </LabelsStyled>
    );
}

export default Labels;

const LabelsStyled = styled.div`
    color: red;
`;