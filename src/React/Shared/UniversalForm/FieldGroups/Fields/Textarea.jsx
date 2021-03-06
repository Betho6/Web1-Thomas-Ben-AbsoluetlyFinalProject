import React from 'react';
import styled from 'styled-components';

const Textarea = ({theField, onChange}) => {

    const theClassName = (!theField.errors || theField.errors.length < 1)
        ? 'Textarea'
        : 'Textarea error';

        

    return (
        <TextareaStyled className={ theClassName }

            id={ theField.id }
            value={ theField.value }
            
            onChange={ onChange }        
        />
    );
}

export default Textarea;

const TextareaStyled = styled.textarea`
    display:block;
    width: 100%;
    font-size: 16px;
    padding: 5px 10px;
    border: solid 3px #c4c4c4;
    border-radius: 5px;
    outline: none;

    &:focus{
        border: solid 3px #969696;
    }

    &.error{
        border: solid 3px red;
    }
`;

