import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Label from './Label.jsx'
import Field from './Field.jsx'
import Error from './Error.jsx'

const FieldGroups = ({id, theFields, handleFieldUpdate}) => {

    const theField= theFields.find((field)=>{
        return field.id === id;
    });

    return (
        <FieldGroupsStyled className='FieldGroups'>
            <Label id={id} theField={ theField} />
            <Field id={id} theField={ theField} handleFieldUpdate= { handleFieldUpdate } />
            <Error id={id} theField={ theField} /> 
        </FieldGroupsStyled>
    );
}

export default FieldGroups;

const FieldGroupsStyled = styled.div`
    padding:5px;
    
`;